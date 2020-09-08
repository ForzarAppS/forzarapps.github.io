/*открытие закрытие спойлера*/
function OpenCloseSpoiler(SpoilerButton, SpoilerId, On, Off) {
    switch (SpoilerButton.firstElementChild.id) {
        case "down": {
            SpoilerButton.outerHTML = "<div class='button' onclick='OpenCloseSpoiler(this, \"" + SpoilerId + "\", \"" + On + "\", \"" + Off + "\")'>" + Off + "<div class='image-spoiler' id='up'></div></div>";
            
            /*размер шрифта*/
        
            const FontSize = Number(window.getComputedStyle(document.body).getPropertyValue("font-size").match(/\d+/)[0]);
            
            /*ширина картинки кнопки*/
            
            document.getElementById(SpoilerId).parentElement.childNodes[3].childNodes[1].style.width = FontSize + "px";
            
            /*высота кнопки*/
            
            document.getElementById(SpoilerId).parentElement.childNodes[3].style.height = FontSize + "px";
            
            /*открыть*/
            
            document.getElementById(SpoilerId).style.display = "block";
            
            break;
        }
        case "up": {
            SpoilerButton.outerHTML = "<div class='button' onclick='OpenCloseSpoiler(this, \"" + SpoilerId + "\", \"" + On + "\", \"" + Off + "\")'>" + On + "<div class='image-spoiler' id='down'></div></div>";
            
            /*размер шрифта*/
        
            const FontSize = Number(window.getComputedStyle(document.body).getPropertyValue("font-size").match(/\d+/)[0]);
            
            /*ширина картинки кнопки*/
            
            document.getElementById(SpoilerId).parentElement.childNodes[3].childNodes[1].style.width = FontSize + "px";
            
            /*высота кнопки*/
            
            document.getElementById(SpoilerId).parentElement.childNodes[3].style.height = FontSize + "px";
            
            /*закрыть*/
            
            document.getElementById(SpoilerId).style.display = "none";
            
            break;
        }
    }
}