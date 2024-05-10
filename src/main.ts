"use strict";
declare let html2canvas: any;

window.addEventListener("DOMContentLoaded", () => {
  const qrCodeElement = document.getElementById("qr-code");

  function handleDownload() {
    html2canvas(qrCodeElement, {"allowTaint": true, "backgroundColor": null, "logging": false}).then((canvas) => {
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

  const qrInput = <HTMLInputElement> document.getElementById("qr-input");
  qrInput?.addEventListener('input', ()=>{
    qrCodeElement?.setAttribute("contents", qrInput.value)
  })

  const downloadButton = <HTMLButtonElement> document.getElementById("download-button")
  downloadButton?.addEventListener("click", () => {
    handleDownload();
  });
})