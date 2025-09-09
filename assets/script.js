// change favicon
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Add Vietnamese fonts
    const fontLinks = [
      "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    ];

    fontLinks.forEach((fontUrl) => {
      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href = fontUrl;
      document.head.appendChild(fontLink);
    });
    console.log("Vietnamese fonts loaded successfully");

    // change favicon
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    // Use a path that works from both root and mindmap subdirectory
    const faviconPath = window.location.pathname.includes("/mindmap/")
      ? "../assets/logo.png"
      : "assets/logo.png";
    link.href = faviconPath;
    document.getElementsByTagName("head")[0].appendChild(link);
    console.log("Favicon set to:", faviconPath);

    //   insert button link to index.html in to of the page
    var button = document.createElement("button");
    button.innerHTML = "Về mục lục";
    button.onclick = function () {
      // Use a path that works from both root and mindmap subdirectory
      const homePath = window.location.pathname.includes("/mindmap/")
        ? "../index.html"
        : "index.html";
      console.log("Navigating to:", homePath);
      window.location.href = homePath;
    };
    document.body.appendChild(button);
    console.log("Navigation button added successfully");

    // insert style for mindmap page
    const style_content = `
      body {
          font-family: 'Be Vietnam Pro', 'Inter', 'Nunito', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          font-feature-settings: "liga" 1, "kern" 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      button {
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 1000;
          padding: 12px 24px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-weight: 500;
          font-size: 14px;
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
      }
      button:hover {
          background: linear-gradient(45deg, #0056b3, #004085);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 123, 255, 0.4);
      }
      button:active {
          transform: translateY(0px);
          box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
      }
      
      /* Vietnamese text optimization */
      * {
          text-rendering: optimizeLegibility;
      }
      
      h1, h2, h3, h4, h5, h6 {
          font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
          font-weight: 600;
      }
      
      p, span, div, li {
          font-family: 'Be Vietnam Pro', 'Nunito', sans-serif;
          line-height: 1.6;
      }
      
      /* Improve Vietnamese diacritics display */
      .vietnamese-text {
          font-variant-ligatures: normal;
          font-feature-settings: "liga" 1, "clig" 1, "kern" 1;
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
