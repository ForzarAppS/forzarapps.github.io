/*создание скриншота*/

function GetScreenshot(TranslationText, Time) {
    /*проверка на существование надписи*/
    
    if (document.getElementsByClassName("text-screenshot")[0] == undefined){
        /*создание канваса с нужным цветом фона*/
        
        html2canvas(document.getElementsByClassName("forma-randomizer")[0], {backgroundColor: window.getComputedStyle(document.body).backgroundColor}).then(function(canvas) {
            let screenshot = canvas;
            
            /*показать скриншот на странице*/
            
            /*document.getElementsByClassName("forma-randomizer")[0].appendChild(screenshot);*/

            /*скопировать надпись в буфер*/
            
            screenshot.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]));

            /*создать надпись*/
            
            document.getElementsByClassName("button-screenshot")[0].insertAdjacentHTML("afterend", "<div class='text-screenshot'>"+TranslationText+"</div>");

            /*убрать надпись*/
            
            setTimeout(() => document.getElementsByClassName("text-screenshot")[0].remove(), Time);
        });
    }
}