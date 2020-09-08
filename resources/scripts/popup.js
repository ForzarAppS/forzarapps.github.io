/*увеличить изображение*/

function ChangeSizeImage(Image) {
    /*создать*/
    
    let DivPopup = document.createElement("div");
    
    /*настройки*/
    
    DivPopup.className = "popup";
    DivPopup.innerHTML = "<div class='popup-background' onclick='ClosePopup()'></div><div class='popup-center' onclick='ClosePopup()'></div>";
    
    /*добавить*/
    
    document.body.append(DivPopup);

    /*создать*/
    
    let ImagePopup = document.createElement("img");
    
    /*настройки*/
    
    ImagePopup.className = "popup-image";
    ImagePopup.src = Image.src;
    
    /*добавить*/
    
    let DivPopupCenter = document.getElementsByClassName("popup-center")[0];
    
    DivPopupCenter.append(ImagePopup);
    
    /*прокрутка*/
    
    document.body.style.overflow = "hidden";
}

/*закрытие всплывающего окна*/

function ClosePopup(){
    document.onclick = function(e) {
        /*по чему можно кликнуть, чтобы закрыть*/
        
        if ((e.target.className == "popup-background") | (e.target.className == "popup-center")) {
            /*удалить*/
            
            document.getElementsByClassName("popup")[0].remove();
    
            /*прокрутка*/
            
            document.body.style.overflow = "auto";
        }
    };
}