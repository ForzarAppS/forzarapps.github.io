/*копирование скриншота*/

function CopyScreenshot(TranslationText, Time) {
    /*наличие распределённых вопросов*/
    
    if (document.getElementsByClassName("people-questions")[0] != undefined) {
        /*проверка на существование надписи*/

        if (document.getElementsByClassName("text-copy-screenshot")[0] == undefined){
            /*создание канваса с нужным цветом фона*/

            html2canvas(document.getElementsByClassName("forma-randomizer")[0], {backgroundColor: window.getComputedStyle(document.body).backgroundColor}).then(function(canvas) {
                let screenshot = canvas;

                /*показать скриншот на странице*/

                /*document.getElementsByClassName("forma-randomizer")[0].appendChild(screenshot);*/

                /*проверяем поддержку*/
                
                if (navigator.clipboard) {
                    /*скопировать скриншот в буфер*/

                    screenshot.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]));
                    
                    /*создать надпись*/

                    document.getElementsByClassName("button-copy")[0].insertAdjacentHTML("beforeend", "<div class='text-copy-screenshot'>"+TranslationText+"</div>");

                    /*убрать надпись*/

                    setTimeout(() => document.getElementsByClassName("text-copy-screenshot")[0].remove(), Time);
                }
            });
        }
    }
}

/*копирование текста*/

function CopyText(TranslationText, Time) {
    /*наличие распределённых вопросов*/
    
    if (document.getElementsByClassName("people-questions")[0] != undefined) {
        /*проверка на существование надписи*/
    
        if (document.getElementsByClassName("text-copy-text")[0] == undefined){
            /*очистка диапазона*/
            
            document.getSelection().removeAllRanges();
            
            /*выбор текста*/

            let range = document.createRange();
            range.selectNodeContents(document.getElementsByClassName("FIO-Questions")[0]);
            document.getSelection().addRange(range);

            /*копировать*/

            document.execCommand("copy");

            /*убрать выделение*/

            document.getSelection().removeAllRanges();

            /*создать надпись*/

            document.getElementsByClassName("button-copy")[0].insertAdjacentHTML("beforeend", "<div class='text-copy-text'>"+TranslationText+"</div>");

            /*убрать надпись*/

            setTimeout(() => document.getElementsByClassName("text-copy-text")[0].remove(), Time);
        }
    }
}