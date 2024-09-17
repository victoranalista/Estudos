// Importar a biblioteca Tesseract.js
const Tesseract = require('tesseract.js');

// Selecionar a imagem que você deseja transcrever
const image = document.getElementById('image');

// Configurar as opções do Tesseract.js
const options = {
  lang: 'por', // Idioma do texto a ser reconhecido (português)
  oem: 3, // Modo de reconhecimento de caracteres
  psm: 6 // Modo de segmentação de texto
};

// Criar uma instância do Tesseract.js
const tesseract = new Tesseract(image, options);

// Realizar a transcrição da imagem
tesseract.recognize().then(result => {
  // Mostrar o texto transcrita
  console.log(result.text);
  // Você pode também utilizar o resultado para enviar para um aplicativo desktop
  // ou realizar outras ações com o texto transcrita
}).catch(error => {
  console.error(error);
});