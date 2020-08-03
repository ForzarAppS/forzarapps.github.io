function OpenCloseSpoiler(SpoilerButton, SpoilerId) {
    switch (SpoilerButton.firstElementChild.src.substr(SpoilerButton.firstElementChild.src.lastIndexOf('/') + 1)) {
        case 'button-down.png': {
            SpoilerButton.outerHTML = "<div class='button' onclick='OpenCloseSpoiler(this, \"" + SpoilerId + "\")'>Скрыть<img src='resources/images/button-up.png' height='15px'></div>";
            
            let Spoiler = document.getElementById(SpoilerId);
            Spoiler.style.display = "block";
            
            break;
        }
        case 'button-up.png': {
            SpoilerButton.outerHTML = "<div class='button' onclick='OpenCloseSpoiler(this, \"" + SpoilerId + "\")'>Показать<img src='resources/images/button-down.png' height='15px'></div>";
            
            let Spoiler = document.getElementById(SpoilerId);
            Spoiler.style.display = "none";
            
            break;
        }
    }
}