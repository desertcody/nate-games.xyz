function showTOS() {
  const tosOverlay = document.getElementById('tos-overlay');
  tosOverlay.style.display = 'flex';
}

function acceptTOS() {
  const tosOverlay = document.getElementById('tos-overlay');
  tosOverlay.style.display = 'none';
  localStorage.setItem('acceptedTOS', 'true');
}

function checkTOS() {
  if (!localStorage.getItem('acceptedTOS')) {
    showTOS();
    fetch('/0/assets/js/tos.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('tos-title').textContent = data.title;
        const tosContent = document.getElementById('tos-content');
        tosContent.innerHTML = '';
        data.sections.forEach(section => {
          const sectionElement = document.createElement('div');
          sectionElement.innerHTML = `<p>${section.title}</p><p>${section.content}</p>`;
          tosContent.appendChild(sectionElement);
        });
        const acceptanceQuestion = document.createElement('p');
        acceptanceQuestion.innerHTML = `${data.acceptanceQuestion} <a style="color: red;">*</a>`;
        tosContent.appendChild(acceptanceQuestion);
      })
      .catch(error => console.error('Error fetching TOS content:', error));
  }
}