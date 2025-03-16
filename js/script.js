document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my resume page!");
});

document.getElementById("downloadPdf").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
        
    const resume = document.body;

    html2canvas(resume, {
        scale: 3, 
        useCORS: true
    }).then(canvas => {
        let imgData = canvas.toDataURL("image/png");
        let imgWidth = canvas.width * 0.2645;  
        let imgHeight = canvas.height * 0.2645;

        let pdf = new jsPDF({
            orientation: imgWidth > imgHeight ? "l" : "p", 
            unit: "mm",
            format: [imgWidth, imgHeight] 
        });

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("Resume.pdf"); 
        });
});






