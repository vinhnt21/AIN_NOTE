// change favicon
document.addEventListener("DOMContentLoaded", function () {
  try {
    // change favicon
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    // Use a path that works from both root and mindmap subdirectory
    const faviconPath = window.location.pathname.includes('/mindmap/') ? "../assets/logo.png" : "assets/logo.png";
    link.href = faviconPath;
    document.getElementsByTagName("head")[0].appendChild(link);
    console.log("Favicon set to:", faviconPath);
    
    //   insert button link to index.html in to of the page
    var button = document.createElement("button");
    button.innerHTML = "Về mục lục";
    button.onclick = function () {
      // Use a path that works from both root and mindmap subdirectory
      const homePath = window.location.pathname.includes('/mindmap/') ? "../index.html" : "index.html";
      console.log("Navigating to:", homePath);
      window.location.href = homePath;
    };
    document.body.appendChild(button);
    console.log("Navigation button added successfully");
    
    // insert style for mindmap page
    const style_content = `
      body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
        }
      button {
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 1000;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
      }
      button:hover {
          background-color: #0056b3;
      }
      `;
    var style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(style_content));
    document.head.appendChild(style);
    console.log("Styles added successfully");
  } catch (error) {
    console.error("Error in script.js:", error);
  }
});
