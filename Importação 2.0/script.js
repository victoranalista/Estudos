const imageInput = document.getElementById('image-input');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
  const images = imageInput.files;

  // Enviar as imagens para o outro sistema
  // Por exemplo, enviando-as via AJAX para um servidor
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/transcribe', true);
  xhr.send(new FormData(imageInput.parentElement));
});

const fileInput = $('#file-input');
const file = fileInput[0].files[0];

$.ajax({
  type: 'POST',
  url: '/api/upload',
  data: new FormData(fileInput[0].parentElement),
  processData: false,
  contentType: false,
  success: function(data) {
    console.log(data);
  }
});