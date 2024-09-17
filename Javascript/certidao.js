const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// Função para adicionar texto a uma imagem
async function addTextToImage(imagePath, text, outputPath) {
    const image = await loadImage(imagePath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    // Desenhar a imagem de fundo
    ctx.drawImage(image, 0, 0);

    // Configurar estilo do texto
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    // Adicionar texto na imagem
    ctx.fillText(text, 50, 50); // Ajuste a posição do texto conforme necessário

    // Salvar a imagem resultante
    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on('finish', () => console.log('Imagem salva com sucesso!'));
}

// Uso da função
const extractedText = 'Texto extraído do PDF';
addTextToImage('caminho/para/sua/certidao.pdf', extractedText, 'caminho/para/certidaofinal.pdf');
