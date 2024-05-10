"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const qrCodeElement = document.getElementById("qr-code");
    function handleDownload() {
        html2canvas(qrCodeElement, { "allowTaint": true, "backgroundColor": null }).then((canvas) => {
            const url = canvas.toDataURL();
            // document.body.appendChild(canvas);
            // window.location = url
            let link = document.createElement("a");
            link.setAttribute("type", "hidden");
            document.body.appendChild(link);
            link.href = url;
            link.download = "qrcode.png";
            link.click();
            document.body.removeChild(link);
        });
    }
    const qrInput = document.getElementById("qr-input");
    qrInput?.addEventListener('input', () => {
        qrCodeElement?.setAttribute("contents", qrInput.value);
    });
    const downloadButton = document.getElementById("download-button");
    downloadButton?.addEventListener("click", () => {
        handleDownload();
    });
});
