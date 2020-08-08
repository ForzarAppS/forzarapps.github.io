function ChangeSizeImage(Image) {
    let DivPopup = document.createElement('div');
    
    DivPopup.className = "popup";
    DivPopup.innerHTML = "<div class='popup-background' onclick='ClosePopup()'></div><div class='popup-center' onclick='ClosePopup()'></div>";
    
    document.body.append(DivPopup);
    
    let DivPopupCenter = document.getElementsByClassName("popup-center")[0];

    let ImagePopup = document.createElement('img');
    ImagePopup.className = "popup-image";
    ImagePopup.src = Image.src;
    
    DivPopupCenter.append(ImagePopup);
    
    document.body.style.overflow = "hidden";
}

function ClosePopup(){
    document.onclick = function(e) {
        if ((e.target.className == "popup-background") | (e.target.className == "popup-center")) {
            document.getElementsByClassName("popup")[0].remove();
    
            document.body.style.overflow = "auto";
        }
    };
}