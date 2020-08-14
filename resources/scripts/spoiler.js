function OpenCloseSpoiler(SpoilerButton, SpoilerId, Path, On, Off) {
    
    switch (SpoilerButton.firstElementChild.src.substr(SpoilerButton.firstElementChild.src.lastIndexOf('/') + 1)) {
        case 'button-down.png': {
            SpoilerButton.outerHTML = "<div class='button' onclick='OpenCloseSpoiler(this, \"" + SpoilerId + "\", \"" + Path + "\", \"" + On + "\", \"" + Off + "\")'>" + Off + "<img src='" + Path + "button-up.png' height='15px'></div>";
            
            document.getElementById(SpoilerId).style.display = "block";
            
            break;
        }
        case 'button-up.png': {
            SpoilerButton.outerHTML = "<div class='button' onclick='OpenCloseSpoiler(this, \"" + SpoilerId + "\", \"" + Path + "\", \"" + On + "\", \"" + Off + "\")'>" + On + "<img src='" + Path + "button-down.png' height='15px'></div>";
            
            document.getElementById(SpoilerId).style.display = "none";
            
            break;
        }
    }
}