---
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
  activeNode:
    placement: center
  initialExpandLevel: 2
---

# Tìm kiếm trong Trí tuệ nhân tạo (Search in AI)

## Bản chất:

- _Tìm kiếm là quá trình khám phá một chuỗi các hành động (một con đường) để đi từ trạng thái ban đầu đến trạng thái mục tiêu._

## 1. Các thành phần của một bài toán tìm kiếm

- _Là những yếu tố cơ bản để định nghĩa bất kỳ bài toán tìm kiếm nào._

- **Tác nhân (Agent)**: Thực thể nhận thức môi trường và hành động trên đó.
  - _Ví dụ_: Một robot hút bụi, một chương trình chơi cờ vua, hoặc một ứng dụng chỉ đường.
- **Trạng thái (State)**: Một cấu hình cụ thể của tác nhân và môi trường.
  - _Ví dụ_: Vị trí hiện tại của robot trong một căn phòng, thế cờ trên bàn cờ.
- **Trạng thái ban đầu (Initial State)**: Trạng thái mà tác nhân bắt đầu.
  - _Ví dụ_: Robot ở trạm sạc, bàn cờ ở thế khai cuộc.
- **Hành động (Actions)**: Các lựa chọn mà tác nhân có thể thực hiện ở một trạng thái.
  - _Ví dụ_: Di chuyển sang trái, đi lên, đi quân Mã đến vị trí X.
- **Mô hình chuyển đổi (Transition Model)**: Mô tả trạng thái kết quả sau khi thực hiện một hành động.
  - _Ví dụ_: Nếu robot ở ô (1,1) và hành động là "đi lên", trạng thái mới sẽ là (1,2).
- **Không gian trạng thái (State Space)**: Tập hợp tất cả các trạng thái có thể đạt được từ trạng thái ban đầu.
  - _Ví dụ_: Tất cả các vị trí mà robot có thể đến, tất cả các thế cờ hợp lệ.
- **Kiểm tra mục tiêu (Goal Test)**: Phương pháp xác định xem một trạng thái có phải là trạng thái mục tiêu hay không.
  - _Ví dụ_: Robot đã dọn dẹp hết phòng chưa? Đã chiếu hết Vua đối phương chưa?
- **Chi phí đường đi (Path Cost)**: Chi phí số học gắn với một đường đi nhất định.
  - _Ví dụ_: Tổng quãng đường di chuyển, số nước đi để chiến thắng.

## 2. Phương pháp tiếp cận tìm kiếm

- _Cách thức tổ chức quá trình tìm kiếm một cách có hệ thống._

- **Nút (Node)**: Một cấu trúc dữ liệu lưu trữ thông tin về một trạng thái, nút cha, hành động tạo ra nó và chi phí đường đi.
- **Biên (Frontier)**: Một tập hợp các nút đang chờ được khám phá (giống như danh sách "những nơi cần đến").
- **Tập đã khám phá (Explored Set)**: Một tập hợp các nút đã được ghé thăm để tránh việc xử lý lặp lại và các vòng lặp vô hạn.
- **Quy trình cơ bản**:
  1. Bắt đầu với `Frontier` chứa nút ban đầu.
  2. Lặp lại:
     - Lấy một nút ra khỏi `Frontier`.
     - Nếu là mục tiêu -> Tìm thấy lời giải!
     - Nếu không, thêm nút này vào `Explored Set`.
     - Mở rộng nút này: tạo các nút con từ các hành động hợp lệ.
     - Thêm các nút con vào `Frontier` nếu chúng chưa có trong `Frontier` hoặc `Explored Set`.
  3. Nếu `Frontier` rỗng mà chưa tìm thấy mục tiêu -> Không có lời giải.

## 3. Các thuật toán tìm kiếm

### 3.1. Tìm kiếm không có thông tin (Uninformed Search)

- _Chỉ sử dụng thông tin có trong định nghĩa bài toán, không có kiến thức bổ sung._

- **Tìm kiếm theo chiều sâu (Depth-First Search - DFS)**:

  - _Bản chất_: Luôn ưu tiên đi sâu nhất có thể vào một nhánh trước khi quay lại. Tưởng tượng bạn đang khám phá một mê cung bằng cách luôn đi về phía trước cho đến khi gặp ngõ cụt, sau đó mới quay lại và thử một lối rẽ khác.
  - _Cấu trúc dữ liệu_: Sử dụng **ngăn xếp (Stack - LIFO)**.
  - _Đặc điểm_: Nhanh tìm thấy lời giải nếu nó nằm sâu. Không đảm bảo tìm thấy lời giải tối ưu. Có thể bị lạc trong các nhánh vô hạn.
  - _Mã giả_:

    ```
    function DFS(start_node, goal_node):
      frontier = new Stack()
      frontier.push(start_node)
      explored = new Set()

      while frontier is not empty:
        node = frontier.pop()
        if node.state is goal_node:
          return solution(node)

        explored.add(node.state)

        for each action, child_state in expand(node):
          if child_state not in explored and child_state not in frontier:
            frontier.push(new_node(child_state, node, action))
      return failure

    ```

- **Tìm kiếm theo chiều rộng (Breadth-First Search - BFS)**:

  - _Bản chất_: Khám phá tất cả các nút ở một độ sâu trước khi chuyển sang độ sâu tiếp theo. Giống như ném một viên sỏi xuống nước và quan sát các gợn sóng lan ra đồng đều từng lớp một.
  - _Cấu trúc dữ liệu_: Sử dụng **hàng đợi (Queue - FIFO)**.
  - _Đặc điểm_: Luôn tìm thấy lời giải nông nhất (tối ưu nếu chi phí mỗi bước là như nhau). Tốn nhiều bộ nhớ vì phải lưu trữ tất cả các nút ở mỗi tầng.
  - _Mã giả_:

    ```
    function BFS(start_node, goal_node):
      frontier = new Queue()
      frontier.enqueue(start_node)
      explored = new Set()

      while frontier is not empty:
        node = frontier.dequeue()
        if node.state is goal_node:
          return solution(node)

        explored.add(node.state)

        for each action, child_state in expand(node):
          if child_state not in explored and child_state not in frontier:
            frontier.enqueue(new_node(child_state, node, action))
      return failure

    ```

### 3.2. Tìm kiếm có thông tin (Informed Search)

- _Sử dụng kiến thức đặc thù của bài toán (heuristic) để tìm kiếm hiệu quả hơn._

- **Hàm Heuristic (h(n))**: Một hàm ước tính chi phí từ nút `n` đến mục tiêu. Đây là "linh cảm" hoặc "sự phỏng đoán có cơ sở" để dẫn đường cho thuật toán.
- **Tìm kiếm Tham lam Tốt nhất đầu tiên (Greedy Best-First Search)**:

  - _Bản chất_: Rất "tham lam", luôn mở rộng nút được ước tính là gần mục tiêu nhất theo hàm heuristic, bất kể đã đi bao xa. Nó chỉ nhìn vào lợi ích trước mắt.
  - _Đặc điểm_: Nhanh nhưng thường không tìm được lời giải tối ưu và có thể bị mắc kẹt.
  - _Mã giả_:

    ```
    function GreedyBFS(start_node, goal_node, h):
      frontier = new PriorityQueue() ordered by h(n)
      frontier.add(start_node)
      explored = new Set()

      while frontier is not empty:
        node = frontier.pop_lowest_h()
        if node.state is goal_node:
          return solution(node)

        explored.add(node.state)

        for each action, child_state in expand(node):
          if child_state not in explored and child_state not in frontier:
            frontier.add(new_node(child_state, node, action))
      return failure

    ```

- **A\* Search**:

  - _Bản chất_: Là sự kết hợp thông minh giữa chi phí thực tế và chi phí ước tính. Nó mở rộng nút có tổng `f(n) = g(n) + h(n)` thấp nhất, trong đó:
    - `g(n)`: chi phí thực tế đã đi từ điểm bắt đầu đến nút `n`.
    - `h(n)`: chi phí ước tính từ `n` đến mục tiêu.
  - _Đặc điểm_: Đảm bảo tìm ra lời giải tối ưu nếu hàm heuristic là **admissible** (không bao giờ đánh giá quá cao chi phí thực).
  - _Mã giả_:

    ```
    function AStar(start_node, goal_node, h):
      frontier = new PriorityQueue() ordered by f(n) = g(n) + h(n)
      start_node.g = 0
      start_node.f = h(start_node)
      frontier.add(start_node)
      explored = new Set()

      while frontier is not empty:
        node = frontier.pop_lowest_f()
        if node.state is goal_node:
          return solution(node)

        explored.add(node.state)

        for each action, child_state in expand(node):
          new_g = node.g + cost(node, action)
          if child_state not in explored and child_state not in frontier:
             // Set g, f and add to frontier
          else if child_state in frontier and new_g < child_node.g:
             // Update g, f in frontier
      return failure

    ```

### 3.3. Tìm kiếm đối kháng (Adversarial Search)

- _Sử dụng trong các trò chơi hai người chơi, có tổng bằng không (zero-sum game) như cờ vua, cờ caro, nơi lợi ích của người này là thiệt hại của người kia._

- **Các thuật ngữ chính**:
  - **Game Tree**: Một cây biểu diễn tất cả các chuỗi nước đi có thể xảy ra trong một trò chơi. Gốc là trạng thái hiện tại, và mỗi nút con là một trạng thái có thể đạt được sau một nước đi.
  - **Terminal State**: Trạng thái kết thúc trò chơi (thắng, thua, hoặc hòa).
  - **Utility Function**: Một hàm gán một giá trị số cho một `Terminal State`. Ví dụ: +1 cho chiến thắng, -1 cho thua, 0 cho hòa.
  - **MAX Player**: Người chơi (AI của chúng ta) cố gắng thực hiện các nước đi để đạt được trạng thái có giá trị Utility cao nhất.
  - **MIN Player**: Đối thủ, người cố gắng thực hiện các nước đi để dẫn đến trạng thái có giá trị Utility thấp nhất.
- **Thuật toán Minimax**:

  - _Bản chất_:
    - Là một thuật toán đệ quy để tìm ra nước đi tối ưu. Nó hoạt động bằng cách duyệt qua toàn bộ cây trò chơi, đi xuống đến các trạng thái kết thúc, sau đó lan truyền các giá trị utility ngược lên cây. Nút của MAX sẽ chọn giá trị lớn nhất từ các nút con, trong khi nút của MIN sẽ chọn giá trị nhỏ nhất.
  - _Logic_:
    - Giả định rằng đối thủ cũng sẽ chơi một cách hoàn hảo. Do đó, MAX sẽ chọn nước đi dẫn đến trạng thái có giá trị cao nhất, sau khi đã tính đến việc MIN sẽ luôn cố gắng chọn nước đi dẫn đến trạng thái có giá trị thấp nhất cho MAX.
    - 1. AI "vẽ" ra cây trò chơi đến khi kết thúc.
    - 2. Nó chấm điểm cho các kết quả cuối cùng (+1, -1, 0).
    - 3. **Làm việc ngược lên**:
         Tại lượt của **Đối thủ (MIN)**, nó sẽ chọn nước đi dẫn đến kết quả có điểm **thấp nhất** (bất lợi nhất cho bạn).
         Tại lượt của **Bạn (MAX)**, bạn sẽ chọn nước đi dẫn đến kết quả có điểm **cao nhất**.
  - _Mã giả_:

    ```
    // Hàm cho người chơi MAX tìm giá trị tốt nhất
    function Max-Value(state):
      if Terminal-Test(state):
        return Utility(state)
      v = -infinity
      for each action in Actions(state):
        v = max(v, Min-Value(Result(state, action)))
      return v

    // Hàm cho người chơi MIN tìm giá trị tốt nhất (xấu nhất cho MAX)
    function Min-Value(state):
      if Terminal-Test(state):
        return Utility(state)
      v = +infinity
      for each action in Actions(state):
        v = min(v, Max-Value(Result(state, action)))
      return v

    ```

- **Tối ưu hóa (Optimizations)**:
  - **Cắt tỉa Alpha-Beta (Alpha-Beta Pruning)**:
    - _Bản chất_: Một kỹ thuật tối ưu hóa cho Minimax. Nó ngừng đánh giá một nhánh của cây trò chơi ngay khi xác định được rằng nhánh đó sẽ không thể tốt hơn một nước đi đã được tìm thấy trước đó. Điều này giúp loại bỏ một phần lớn các phép tính không cần thiết.
    - **Alpha (α)**: Giá trị tốt nhất (cao nhất) mà MAX có thể đảm bảo tại một điểm trên cây.
    - **Beta (β)**: Giá trị tốt nhất (thấp nhất) mà MIN có thể đảm bảo tại một điểm trên cây.
    - **Nguyên tắc cắt tỉa**: Một nhánh của MIN sẽ bị cắt nếu `β <= α`. Tức là, nếu MIN tìm thấy một nước đi có thể buộc kết quả tệ hơn (`β`) so với một lựa chọn mà MAX đã có sẵn (`α`), MAX sẽ không bao giờ đi vào nhánh đó.
  - **Minimax giới hạn độ sâu (Depth-Limited Minimax)**:
    - _Bản chất_: Đối với các trò chơi phức tạp (như cờ vua), cây trò chơi quá lớn để duyệt hết. Thay vào đó, thuật toán chỉ tìm kiếm đến một độ sâu nhất định (ví dụ: 5 nước đi tiếp theo).
    - **Hàm đánh giá (Evaluation Function)**: Vì tìm kiếm không đi đến trạng thái kết thúc, chúng ta cần một hàm để "đoán" xem một thế cờ tốt như thế nào. Hàm này sẽ gán một điểm số cho một trạng thái không phải là kết thúc dựa trên các yếu tố như số lượng quân cờ, vị trí chiến lược, v.v. Chất lượng của AI phụ thuộc rất nhiều vào hàm đánh giá này.
