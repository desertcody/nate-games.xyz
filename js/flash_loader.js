function handleFileChange(event) {
    var fileInput
    var fileInput = event.target;
    var file = fileInput.files[0];

    if (file) {
      var fileNameElement = document.getElementById('file-name');
      fileNameElement.textContent = 'Selected File: ' + file.name;
      fileNameElement.style.display = 'block';
    }
  }

  function loadFlash() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];

    if (file) {
      var reader = new FileReader();
      reader.onload = function (event) {
        var flashContent = event.target.result;

        var container = document.getElementById('flash-container');
        container.innerHTML = '';

        var embed = document.createElement('embed');
        embed.src = flashContent;
        embed.type = 'application/x-shockwave-flash';
        embed.width = '1200px';
        embed.height = '625px';

        container.appendChild(embed);
      };
      reader.readAsDataURL(file);
    }
  }