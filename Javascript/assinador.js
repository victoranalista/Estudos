async function assinarDocumento(pdfBlob) {
    // Enviar PDF para a API de assinatura
    const response = await fetch('URL_DA_API_DE_ASSINATURA', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/pdf'
        },
        body: pdfBlob
    });

    const result = await response.blob();
    // Exibir ou salvar o PDF assinado
    const url = URL.createObjectURL(result);
    window.open(url);
}
