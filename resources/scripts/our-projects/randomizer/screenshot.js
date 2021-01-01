function GetScreenshot() {
    if (document.getElementsByClassName("text-screenshot")[0] == undefined){
        html2canvas(document.getElementsByClassName("form-randomizer")[0], {backgroundColor: window.getComputedStyle(document.body).backgroundColor}).then(function(canvas) {
            let screenshot = canvas;
            
            //показать скриншот на странице
            //document.getElementsByClassName("form-randomizer")[0].appendChild(screenshot);

            screenshot.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]));

            document.getElementsByClassName("button-screenshot")[0].insertAdjacentHTML("afterend", "<div class='text-screenshot'>Изображение скопированно в буфер</div>");

            setTimeout(() => document.getElementsByClassName("text-screenshot")[0].remove(), 5000);
        });
    }
}