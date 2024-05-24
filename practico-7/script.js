document.querySelector('#downloadBtn').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const content = document.querySelector('.cv');
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');

    doc.addImage(imgData, 'PNG', 10, 10, 190, 0);
    doc.save('frontendDeveloperJorgeJoelAnayaMoreno.pdf');
});
