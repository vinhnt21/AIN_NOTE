# Search Algorithms in Maze - Mermaid Diagrams

Tài liệu này chứa các biểu đồ Mermaid minh họa các thuật toán tìm kiếm đường đi trong mê cung được thực hiện trong bài thực hành.

## 1. Depth-First Search (DFS) Algorithm

DFS sử dụng cấu trúc Stack (LIFO - Last In First Out) để khám phá mê cung theo chiều sâu.

```mermaid
flowchart TD
    A[Start: Initialize Stack with start node] --> B[Is Stack empty?]
    B -->|Yes| C[No solution found]
    B -->|No| D[Remove node from Stack top]
    D --> E[Is current node the goal?]
    E -->|Yes| F[Solution found! Reconstruct path]
    E -->|No| G[Add current node to explored set]
    G --> H[Get all valid neighbors]
    H --> I[For each neighbor not explored]
    I --> J[Create new node with parent info]
    J --> K[Add node to Stack]
    K --> L[More neighbors?]
    L -->|Yes| I
    L -->|No| B
    
    style A fill:#e1f5fe
    style F fill:#c8e6c9
    style C fill:#ffcdd2
```

### Đặc điểm của DFS:
- **Cấu trúc**: Stack (LIFO)
- **Đặc tính**: Đi sâu trước, không đảm bảo tối ưu
- **Bộ nhớ**: Ít hơn BFS
- **Ứng dụng**: Khi cần tiết kiệm bộ nhớ

## 2. Breadth-First Search (BFS) Algorithm

BFS sử dụng cấu trúc Queue (FIFO - First In First Out) để khám phá theo chiều rộng.

```mermaid
flowchart TD
    A[Start: Initialize Queue with start node] --> B[Is Queue empty?]
    B -->|Yes| C[No solution found]
    B -->|No| D[Remove node from Queue front]
    D --> E[Is current node the goal?]
    E -->|Yes| F[Solution found! Reconstruct optimal path]
    E -->|No| G[Add current node to explored set]
    G --> H[Get all valid neighbors]
    H --> I[For each neighbor not explored]
    I --> J[Create new node with parent info]
    J --> K[Add node to Queue rear]
    K --> L[More neighbors?]
    L -->|Yes| I
    L -->|No| B
    
    style A fill:#e1f5fe
    style F fill:#c8e6c9
    style C fill:#ffcdd2
```

### Đặc điểm của BFS:
- **Cấu trúc**: Queue (FIFO)
- **Đặc tính**: Đảm bảo đường đi ngắn nhất
- **Bộ nhớ**: Nhiều hơn DFS
- **Ứng dụng**: Khi cần đường đi tối ưu

## 3. Greedy Best-First Search Algorithm

Greedy Best-First Search sử dụng hàm heuristic để chọn node có vẻ gần đích nhất.

```mermaid
flowchart TD
    A[Start: Initialize Priority Queue with start node] --> B[Is Queue empty?]
    B -->|Yes| C[No solution found]
    B -->|No| D[Remove node with smallest h_n]
    D --> E[Is current node the goal?]
    E -->|Yes| F[Solution found! May not be optimal]
    E -->|No| G[Add current node to explored set]
    G --> H[Get all valid neighbors]
    H --> I[For each neighbor not explored]
    I --> J[Calculate heuristic h_n equals Manhattan Distance to goal]
    J --> K[Create new node with parent info]
    K --> M[Add node to Priority Queue based on h_n]
    M --> N[More neighbors?]
    N -->|Yes| I
    N -->|No| B
    
    style A fill:#e1f5fe
    style F fill:#fff3e0
    style C fill:#ffcdd2
    style J fill:#e8f5e8
```

### Hàm Heuristic - Manhattan Distance:
```mermaid
graph LR
    A[Current Position: r1, c1] --> B[Goal Position: r2, c2]
    B --> C["h(n) = abs(r2 - r1) + abs(c2 - c1)"]
    
    style C fill:#e8f5e8
```

### Đặc điểm của Greedy Best-First:
- **Cấu trúc**: Priority Queue dựa trên h(n)
- **Đặc tính**: Nhanh nhưng không đảm bảo tối ưu
- **Heuristic**: Manhattan Distance
- **Ứng dụng**: Khi cần giải pháp nhanh

## 4. A* Search Algorithm

A* kết hợp chi phí thực tế g(n) và heuristic h(n) để tạo ra f(n) = g(n) + h(n).

```mermaid
flowchart TD
    A[Start: Initialize Priority Queue with start node] --> B[Is Queue empty?]
    B -->|Yes| C[No solution found]
    B -->|No| D[Remove node with smallest f_n]
    D --> E[Is current node the goal?]
    E -->|Yes| F[Optimal solution found!]
    E -->|No| G[Add current node to explored set]
    G --> H[Get all valid neighbors]
    H --> I[For each neighbor not explored]
    I --> J[Calculate g_n equals cost from start]
    J --> K[Calculate h_n equals Manhattan Distance to goal]
    K --> L[Calculate f_n equals g_n plus h_n]
    L --> M[Create new node with parent and cost info]
    M --> N[Add node to Priority Queue based on f_n]
    N --> O[More neighbors?]
    O -->|Yes| I
    O -->|No| B
    
    style A fill:#e1f5fe
    style F fill:#c8e6c9
    style C fill:#ffcdd2
    style L fill:#e8f5e8
```

### A* Evaluation Function:
```mermaid
graph LR
    A["g(n): Actual cost from start"] --> C["f(n) = g(n) + h(n)"]
    B["h(n): Heuristic cost to goal"] --> C
    C --> D[Priority for node selection]
    
    style C fill:#e8f5e8
    style D fill:#fff3e0
```

### Đặc điểm của A*:
- **Cấu trúc**: Priority Queue dựa trên f(n)
- **Đặc tính**: Tối ưu với heuristic admissible
- **Công thức**: f(n) = g(n) + h(n)
- **Ứng dụng**: Cân bằng tốc độ và chất lượng

## 5. So Sánh Các Thuật Toán

```mermaid
graph LR
    A[Search Algorithms] --> B[Uninformed Search]
    A --> C[Informed Search]
    
    B --> D["DFS<br/>- Stack (LIFO)<br/>- Not optimal<br/>- Low memory"]
    B --> E["BFS<br/>- Queue (FIFO)<br/>- Optimal<br/>- High memory"]
    
    C --> F["Greedy Best-First<br/>- Priority Queue h(n)<br/>- Fast but not optimal<br/>- Uses heuristic"]
    C --> G["A* Search<br/>- Priority Queue f(n)<br/>- Optimal + Efficient<br/>- f(n) = g(n) + h(n)"]
    
    style B fill:#e3f2fd
    style C fill:#f3e5f5
    style D fill:#ffecb3
    style E fill:#ffecb3
    style F fill:#e8f5e8
    style G fill:#e8f5e8
```

## 6. Bảng So Sánh Chi Tiết

| Thuật Toán | Cấu Trúc Dữ Liệu | Tối Ưu | Hoàn Thiện | Time Complexity | Space Complexity |
|------------|-------------------|---------|------------|-----------------|------------------|
| **DFS** | Stack (LIFO) | ❌ | ❌ | O(b^m) | O(bm) |
| **BFS** | Queue (FIFO) | ✅ | ✅ | O(b^d) | O(b^d) |
| **Greedy** | Priority Queue h(n) | ❌ | ❌ | O(b^m) | O(b^m) |
| **A*** | Priority Queue f(n) | ✅ | ✅ | O(b^d) | O(b^d) |

*Chú thích: b = branching factor, d = depth of solution, m = maximum depth*

## 7. Quy Trình Thực Hiện Chung

```mermaid
flowchart TD
    A[Initialize Algorithm] --> B[Create Frontier with start node]
    B --> C[Create empty explored set]
    C --> D[Main Loop: While frontier not empty]
    D --> E[Remove node from frontier<br/>according to algorithm strategy]
    E --> F{Is node the goal?}
    F -->|Yes| G[Return solution path]
    F -->|No| H[Add node to explored set]
    H --> I[Generate neighbors]
    I --> J[Filter out explored neighbors]
    J --> K[Add valid neighbors to frontier]
    K --> D
    D -->|Frontier empty| L[No solution exists]
    
    style A fill:#e1f5fe
    style G fill:#c8e6c9
    style L fill:#ffcdd2
    style E fill:#fff3e0
```

## 8. Lưu Ý Thực Hiện

### Điều Kiện Admissible cho A*:
- Heuristic h(n) không bao giờ overestimate chi phí thực tế
- Manhattan distance là admissible cho maze problem
- Đảm bảo A* tìm được solution tối ưu

### Tips Debugging:
1. In ra frontier sau mỗi bước
2. Kiểm tra explored set
3. Verify hàm heuristic
4. Test với maze đơn giản trước

---

*Tài liệu này được tạo để minh họa các thuật toán tìm kiếm trong bài thực hành Maze pathfinding.*
