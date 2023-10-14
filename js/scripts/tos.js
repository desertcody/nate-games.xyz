function showTOS() {
  const tosOverlay = document.getElementById("tos-overlay");
  tosOverlay.style.display = "flex";
}

function acceptTOS() {
  const tosOverlay = document.getElementById("tos-overlay");
  tosOverlay.style.display = "none";
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  localStorage.setItem("acceptedTOS", "true");
  localStorage.setItem("TOSExpirationDate", expirationDate.toISOString());
}

function checkTOS() {
  const acceptedTOS = localStorage.getItem("acceptedTOS");
  const TOSExpirationDate = localStorage.getItem("TOSExpirationDate");

  if (
    !acceptedTOS ||
    (TOSExpirationDate && new Date(TOSExpirationDate) < new Date())
  ) {
    showTOS();
    fetch("/js/json/tos.json")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("tos-title").textContent = data.title;
        const tosContent = document.getElementById("tos-content");
        tosContent.innerHTML = "";
        data.sections.forEach((section) => {
          const sectionElement = document.createElement("div");
          sectionElement.innerHTML = `<div class="divider-title"><h4><b>${section.title}</b></h4></div><p>${section.content}</p>`;
          tosContent.appendChild(sectionElement);
        });
        const acceptanceQuestion = document.createElement("p");
        acceptanceQuestion.innerHTML = `${data.acceptanceQuestion} <a style="color: red;">*</a>`;
        tosContent.appendChild(acceptanceQuestion);
      })
      .catch((error) => console.error("Error fetching TOS content:", error));
  }
}
