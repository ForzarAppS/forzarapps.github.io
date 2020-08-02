function OpenCloseSpoiler(SpoilerButton, SpoilerId) {
    switch(SpoilerButton.firstElementChild.src.substr(SpoilerButton.firstElementChild.src.lastIndexOf('/') + 1)) {
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

function ChangeSizeImageSpoilerPopup(Image) {
    let DivSpoilerPopup = document.createElement('div');
    
    DivSpoilerPopup.className = "spoiler-popup";
    DivSpoilerPopup.id = "spoiler-popup";
    DivSpoilerPopup.innerHTML = "<div class='spoiler-popup-background' onclick='CloseSpoilerPopup()'></div><div class='spoiler-popup-center' onclick='CloseSpoilerPopup()'><div class='spoiler-popup-center-image' onclick='CloseSpoilerPopup()'><div class='button-popup-left' id='popup-button-left'><img src='resources/images/left.png'></div><div class='button-popup-right' id='popup-button-right'><img src='resources/images/right.png'></div></div></div><div>" + CountImage + "</div>";
    
    document.body.append(DivSpoilerPopup);
    
    let DivPopupButtonLeft = document.getElementById("popup-button-left");
    
    let ImageSpoilerPopup = document.createElement('img');
    
    ImageSpoilerPopup.className = "spoiler-popup-image";
    ImageSpoilerPopup.id = "spoiler-popup-image";
    ImageSpoilerPopup.src = Image.src;
    
    DivPopupButtonLeft.after(ImageSpoilerPopup);
    
    document.body.style.overflow = "hidden";
}

function CloseSpoilerPopup() {
    document.onclick = function(e) {
        if ((e.target.className == "spoiler-popup-background") | (e.target.className == "spoiler-popup-center") | (e.target.className == "spoiler-popup-center-image")) {
            document.getElementById("spoiler-popup").remove();
    
            document.body.style.overflow = "auto";
        }
    };
}

function CountImage() {
    let Spoiler = document.getElementById("spoiler-FV111");
    let count = 0
    
    for (let i = 0; i < Spoiler.childNodes.length; i++) {
        if (Spoiler.childNodes[i].tagName == "IMG") {
            count++;
        }
    }
    
    return count;
}