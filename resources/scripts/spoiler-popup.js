function ChangeSizeImageSpoilerPopup(Image) {
    let DivSpoilerPopup = document.createElement('div');
    
    DivSpoilerPopup.className = "spoiler-popup";
    DivSpoilerPopup.innerHTML = "<div class='spoiler-popup-background' onclick='CloseSpoilerPopup()'></div><div class='spoiler-popup-center' onclick='CloseSpoilerPopup()'><div class='spoiler-popup-center-image' onclick='CloseSpoilerPopup()'><div class='button-popup-left'><img src='resources/images/left.png' onclick='ClickButtonLeft()'></div><div class='button-popup-right'><img src='resources/images/right.png' onclick='ClickButtonRight()'></div><div class='count-images'></div></div></div>";
    
    document.body.append(DivSpoilerPopup);
    
    let DivPopupButtonLeft = document.getElementsByClassName("button-popup-left")[0];
    
    let ImageSpoilerPopup = document.createElement('img');
    
    ImageSpoilerPopup.className = "spoiler-popup-image";
    ImageSpoilerPopup.src = Image.src;
    
    DivPopupButtonLeft.after(ImageSpoilerPopup);
    
    let DivCountImages = document.getElementsByClassName("count-images")[0];
    
    let ProjectName = String(Image.src.substr(Image.src.lastIndexOf('images') + 7, Image.src.substr(Image.src.lastIndexOf('images') + 7).lastIndexOf('/')));
    
    for (let i = 1; i <= CountImages(ProjectName); i++) {
        let ImageOff = document.createElement('img');
        
        if (Image.src.substr(Image.src.lastIndexOf('/') + 1, 2) == i) {
            ImageOff.className = "image-on";
            ImageOff.src = "resources/images/on.png";  
        }
        else {
            ImageOff.className = "image-off";
            ImageOff.src = "resources/images/off.png";
            
            ImageOff.addEventListener('click', ClickSmallImage, false);
        } 
           
        DivCountImages.append(ImageOff);
    }
    
    document.body.style.overflow = "hidden";
}

function CloseSpoilerPopup() {
    document.onclick = function(e) {
        if ((e.target.className == "spoiler-popup-background") | (e.target.className == "spoiler-popup-center") | (e.target.className == "spoiler-popup-center-image")) {
            document.getElementsByClassName("spoiler-popup")[0].remove();
    
            document.body.style.overflow = "auto";
        }
    };
}

function CountImages(ProjectName) {
    let Spoiler = document.getElementById("spoiler-" + ProjectName);
    let count = 0;
    
    for (let i = 0; i < Spoiler.childNodes.length; i++) {
        if (Spoiler.childNodes[i].tagName == "IMG") {
            count++;
        }
    }
    
    return count;
}

function ClickButtonLeft() {
    let Image = document.getElementsByClassName("spoiler-popup-image")[0];
    let Images = document.getElementsByClassName("count-images")[0];
    let count = 0;
    
    let NumberImage = Number(Image.src.substr(Image.src.lastIndexOf('/') + 1, 2));
    let ProjectName = String(Image.src.substr(Image.src.lastIndexOf('images') + 7, Image.src.substr(Image.src.lastIndexOf('images') + 7).lastIndexOf('/')));
    
    for (let i = 0; i < Images.childNodes.length; i++) {
        if (Images.childNodes[i].tagName == "IMG") {
            count++;
            
            if (count == NumberImage) {
                Images.childNodes[i].src = "resources/images/off.png";
                Images.childNodes[i].className = "image-off";
                
                Images.childNodes[i].addEventListener('click', ClickSmallImage, false);
            }

            if ((NumberImage - 1) == 0) {
                if (count == CountImages(ProjectName)) {
                    Images.childNodes[i].src = "resources/images/on.png";
                    Images.childNodes[i].className = "image-on";

                    Images.childNodes[i].removeEventListener('click', ClickSmallImage, false);
                }
            }
            else {
                if (count == (NumberImage - 1)) {
                    Images.childNodes[i].src = "resources/images/on.png";
                    Images.childNodes[i].className = "image-on";
                    
                    Images.childNodes[i].removeEventListener('click', ClickSmallImage, false);
                }
            }
        }
    }

    if ((NumberImage - 1) == 0) {
        if (CountImages(ProjectName) < 10) {
            Image.src = "resources/images/" + ProjectName + "/0" + CountImages(ProjectName) + ".png";
        }
        else {
            Image.src = "resources/images/" + ProjectName + "/" + CountImages(ProjectName) + ".png";
        } 
    }
    else {
        if ((NumberImage - 1) < 10) {
            Image.src = "resources/images/" + ProjectName + "/0" + (NumberImage - 1) + ".png";
        }
        else {
            Image.src = "resources/images/" + ProjectName + "/" + (NumberImage - 1) + ".png";
        }
    }
}

function ClickButtonRight() {
    let Image = document.getElementsByClassName("spoiler-popup-image")[0];
    let Images = document.getElementsByClassName("count-images")[0];
    let count = 0;
    
    let NumberImage = Number(Image.src.substr(Image.src.lastIndexOf('/') + 1, 2));
    let ProjectName = String(Image.src.substr(Image.src.lastIndexOf('images') + 7, Image.src.substr(Image.src.lastIndexOf('images') + 7).lastIndexOf('/')));
    
    for (let i = 0; i < Images.childNodes.length; i++) {
        if (Images.childNodes[i].tagName == "IMG") {
            count++;
            
            if (count == NumberImage) {
                Images.childNodes[i].src = "resources/images/off.png";
                Images.childNodes[i].className = "image-off";
                
                Images.childNodes[i].addEventListener('click', ClickSmallImage, false);
            }

            if ((NumberImage + 1) == (CountImages(ProjectName) + 1)) {
                if (count == 1) {
                    Images.childNodes[i].src = "resources/images/on.png";
                    Images.childNodes[i].className = "image-on";
                    
                    Images.childNodes[i].removeEventListener('click', ClickSmallImage, false);
                }
            }
            else {
                if (count == (NumberImage + 1)) {
                    Images.childNodes[i].src = "resources/images/on.png";
                    Images.childNodes[i].className = "image-on";
                    
                    Images.childNodes[i].removeEventListener('click', ClickSmallImage, false);
                }
            }
        }
    }

    if ((NumberImage + 1) == (CountImages(ProjectName) + 1)) {
        Image.src = "resources/images/" + ProjectName + "/01.png";
    }
    else {
        if ((NumberImage + 1) < 10) {
            Image.src = "resources/images/" + ProjectName + "/0" + (NumberImage + 1) + ".png";
        }
        else {
            Image.src = "resources/images/" + ProjectName + "/" + (NumberImage + 1) + ".png";
        }
    }
}

function ClickSmallImage() {
    let Image = document.getElementsByClassName("count-images")[0];
    
    Image.onclick = function(e) {
        if (e.target.className == "image-off") {
            let Images = document.getElementsByClassName(e.target.parentElement.className)[0];
            
            for (let i = 0; i < Images.childNodes.length; i++) {
                if (e.target == Images.childNodes[i]) {
                    Images.childNodes[i].src = "resources/images/on.png";
                    Images.childNodes[i].className = "image-on";
                    
                    Images.childNodes[i].removeEventListener('click', ClickSmallImage, false);
                    
                    let Image = document.getElementsByClassName("spoiler-popup-image")[0];
                    
                    let NumberImage = i + 1;
                    let ProjectName = String(Image.src.substr(Image.src.lastIndexOf('images') + 7, Image.src.substr(Image.src.lastIndexOf('images') + 7).lastIndexOf('/')));
                    
                    if (NumberImage < 10) {
                        Image.src = "resources/images/" + ProjectName + "/0" + NumberImage + ".png";
                    }
                    else {
                        Image.src = "resources/images/" + ProjectName + "/" + NumberImage + ".png";
                    }
                }
                else {
                    Images.childNodes[i].className = "image-off";
                    Images.childNodes[i].src = "resources/images/off.png";
                    
                    Images.childNodes[i].addEventListener('click', ClickSmallImage, false);
                }
            }
        }
    };
}