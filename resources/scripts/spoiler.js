/*открытие закрытие спойлера*/
function OpenCloseSpoiler(SpoilerButton, SpoilerId, On, Off) {
    switch (SpoilerButton.firstElementChild.id) {
        case 'down': {
            SpoilerButton.outerHTML = "<div class='button' onclick='OpenCloseSpoiler(this, \"" + SpoilerId + "\", \"" + On + "\", \"" + Off + "\")'>" + Off + "<div class='image-spoiler' id='up'></div></div>";
            
            /*открыть*/
            
            document.getElementById(SpoilerId).style.display = "block";
            
            break;
        }
        case 'up': {
            SpoilerButton.outerHTML = "<div class='button' onclick='OpenCloseSpoiler(this, \"" + SpoilerId + "\", \"" + On + "\", \"" + Off + "\")'>" + On + "<div class='image-spoiler' id='down'></div></div>";
            
            /*закрыть*/
            
            document.getElementById(SpoilerId).style.display = "none";
            
            break;
        }
    }
}