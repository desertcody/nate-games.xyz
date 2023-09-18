document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search.substring(1);
  
    const pageMappings = {
      "all": "/games",
      "hot": "/games/hot.html",
      "category=shooting": "/games/shooting.html",
    };
  
    const filePath = pageMappings[queryString];
  
    if (filePath) {
      fetch(filePath)
        .then((response) => response.text())
        .then((html) => {
          document.getElementById("content").innerHTML = html;
        })
        .catch((error) => {
          console.error("Error fetching content:", error);
        });
    }
  });