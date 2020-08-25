/*увеличить изобрежения из спойлеров*/

function ChangeSizeImageSpoilerPopup(Image, Path) {
    /*создать*/
    
    let DivSpoilerPopup = document.createElement('div');
    
    /*настрйоки*/
    
    DivSpoilerPopup.className = "spoiler-popup";
    DivSpoilerPopup.innerHTML = "<div class='spoiler-popup-background' onclick='CloseSpoilerPopup()'></div><div class='spoiler-popup-center' onclick='CloseSpoilerPopup()'><div class='spoiler-popup-center-image' onclick='CloseSpoilerPopup()'><div class='button-popup-left'><div class='button-left' onclick='ClickButtonLeft(\"" + Path + "\")'></div></div><div class='button-popup-right'><div class='button-right' onclick='ClickButtonRight(\"" + Path + "\")'></div></div><div class='count-images'></div></div></div>";
    
    /*добавить*/
    
    document.body.append(DivSpoilerPopup);
    
    /*создать*/
    
    let ImageSpoilerPopup = document.createElement('img');
    
    /*настройки*/
    
    ImageSpoilerPopup.className = "spoiler-popup-image";
    ImageSpoilerPopup.src = Image.src;
    
    /*добавить*/
    
    let DivPopupButtonLeft = document.getElementsByClassName("button-popup-left")[0];
    
    DivPopupButtonLeft.after(ImageSpoilerPopup);
    
    /*блок с точечками*/
    
    let DivCountImages = document.getElementsByClassName("count-images")[0];
    
    /*название проекта*/
    
    let ProjectName = String(Image.src.substr(Image.src.lastIndexOf('images') + 7, Image.src.substr(Image.src.lastIndexOf('images') + 7).lastIndexOf('/')));
    
    for (let i = 1; i <= CountImages(ProjectName); i++) {
        /*создать*/
        
        let ImageOff = document.createElement('div');
        
        /*настройки*/
        
        if (Image.src.substr(Image.src.lastIndexOf('/') + 1, 2) == i) {
            ImageOff.className = "image-on";
        }
        else {
            ImageOff.className = "image-off";
            
            ImageOff.addEventListener('click', ClickSmallImage(Path), false);
        }
        
        /*добавить*/
           
        DivCountImages.append(ImageOff);
    }
    
    /*размеры блока точечек*/
    
    let ImageWidth = document.getElementsByClassName("count-images")[0].childNodes[0].offsetWidth;
    
    document.getElementsByClassName("count-images")[0].style.width = ((ImageWidth + 10) * CountImages(ProjectName)) + "px";
    
    /*прокрутка*/
    
    document.body.style.overflow = "hidden";
}

/*закрыть увеличенные изображения*/

function CloseSpoilerPopup() {
    document.onclick = function(e) {
        /*по чему можно кликнуть, чтобы закрыть*/
        if ((e.target.className == "spoiler-popup-background") | (e.target.className == "spoiler-popup-center") | (e.target.className == "spoiler-popup-center-image")) {
            /*удалить*/
            
            document.getElementsByClassName("spoiler-popup")[0].remove();
            
            /*прокрутка*/
    
            document.body.style.overflow = "auto";
        }
    };
}

/*подсчёт количества изображений под спойлером*/

function CountImages(ProjectName) {
    let Spoiler = document.getElementById("spoiler-" + ProjectName);
    let Count = 0;
    
    for (let i = 0; i < Spoiler.childNodes.length; i++) {
        if (Spoiler.childNodes[i].tagName == "IMG") {
            Count++;
        }
    }
    
    return Count;
}

/*кнопка слева*/

function ClickButtonLeft(Path) {
    /*изображение*/
    
    let Image = document.getElementsByClassName("spoiler-popup-image")[0];
    
    /*блок с точечками*/
    
    let Images = document.getElementsByClassName("count-images")[0];
    let count = 0;
    
    /*номер изображения*/
    
    let NumberImage = Number(Image.src.substr(Image.src.lastIndexOf('/') + 1, 2));
    
    /*название проекта*/
    
    let ProjectName = String(Image.src.substr(Image.src.lastIndexOf('images') + 7, Image.src.substr(Image.src.lastIndexOf('images') + 7).lastIndexOf('/')));
    
    for (let i = 0; i < Images.childNodes.length; i++) {
        if (Images.childNodes[i].tagName == "DIV") {
            count++;
            
            /*изменение изображения*/
            
            if (count == NumberImage) {
                Images.childNodes[i].className = "image-off";
                
                Images.childNodes[i].addEventListener('click', ClickSmallImage(Path), false);
            }

            if ((NumberImage - 1) == 0) {
                if (count == CountImages(ProjectName)) {
                    Images.childNodes[i].className = "image-on";
                    
                    /*удалить обработчик клика*/

                    Images.childNodes[i].removeEventListener('click', ClickSmallImage(Path), false);
                }
            }
            else {
                if (count == (NumberImage - 1)) {
                    Images.childNodes[i].className = "image-on";
                    
                    /*удалить обработчик клика*/
                    
                    Images.childNodes[i].removeEventListener('click', ClickSmallImage(Path), false);
                }
            }
        }
    }
    
    /*увеличение норера изображения*/

    if ((NumberImage - 1) == 0) {
        if (CountImages(ProjectName) < 10) {
            Image.src = Path + ProjectName + "/0" + CountImages(ProjectName) + ".png";
        }
        else {
            Image.src = Path + ProjectName + "/" + CountImages(ProjectName) + ".png";
        } 
    }
    else {
        if ((NumberImage - 1) < 10) {
            Image.src = Path + ProjectName + "/0" + (NumberImage - 1) + ".png";
        }
        else {
            Image.src = Path + ProjectName + "/" + (NumberImage - 1) + ".png";
        }
    }
}

/*кнопка справа*/

function ClickButtonRight(Path) {
    /*изображение*/
    
    let Image = document.getElementsByClassName("spoiler-popup-image")[0];
    
    /*блок с точечками*/
    
    let Images = document.getElementsByClassName("count-images")[0];
    let count = 0;
    
    /*номер изображения*/
    
    let NumberImage = Number(Image.src.substr(Image.src.lastIndexOf('/') + 1, 2));
    
    /*название проекта*/
    
    let ProjectName = String(Image.src.substr(Image.src.lastIndexOf('images') + 7, Image.src.substr(Image.src.lastIndexOf('images') + 7).lastIndexOf('/')));
    
    for (let i = 0; i < Images.childNodes.length; i++) {
        if (Images.childNodes[i].tagName == "DIV") {
            count++;
            
            /*изменение изображения*/
            
            if (count == NumberImage) {
                Images.childNodes[i].className = "image-off";
                
                Images.childNodes[i].addEventListener('click', ClickSmallImage(Path), false);
            }

            if ((NumberImage + 1) == (CountImages(ProjectName) + 1)) {
                if (count == 1) {
                    Images.childNodes[i].className = "image-on";
                    
                    /*удалить обработчик клика*/
                    
                    Images.childNodes[i].removeEventListener('click', ClickSmallImage(Path), false);
                }
            }
            else {
                if (count == (NumberImage + 1)) {
                    Images.childNodes[i].className = "image-on";
                    
                    /*удалить обработчик клика*/
                    
                    Images.childNodes[i].removeEventListener('click', ClickSmallImage(Path), false);
                }
            }
        }
    }
    
    /*увеличение норера изображения*/

    if ((NumberImage + 1) == (CountImages(ProjectName) + 1)) {
        Image.src = Path + ProjectName + "/01.png";
    }
    else {
        if ((NumberImage + 1) < 10) {
            Image.src = Path + ProjectName + "/0" + (NumberImage + 1) + ".png";
        }
        else {
            Image.src = Path + ProjectName + "/" + (NumberImage + 1) + ".png";
        }
    }
}

/*клик по точечкам*/

function ClickSmallImage(Path) {
    /*блок с точечками*/
    
    let Image = document.getElementsByClassName("count-images")[0];
    
    Image.onclick = function(e) {
        /*клик только по выключенным точечкам*/
        
        if (e.target.className == "image-off") {
            let Images = document.getElementsByClassName(e.target.parentElement.className)[0];
            
            for (let i = 0; i < Images.childNodes.length; i++) {
                if (e.target == Images.childNodes[i]) {
                    /*изменение изображения*/
                    
                    Images.childNodes[i].className = "image-on";
                    
                    /*удалить обработчик клика*/
                    
                    Images.childNodes[i].removeEventListener('click', ClickSmallImage(Path), false);
                    
                    /*изображение*/
                    
                    let Image = document.getElementsByClassName("spoiler-popup-image")[0];
                    
                    /*номер изображения*/
                    
                    let NumberImage = i + 1;
                    
                    /*название проекта*/
                    
                    let ProjectName = String(Image.src.substr(Image.src.lastIndexOf('images') + 7, Image.src.substr(Image.src.lastIndexOf('images') + 7).lastIndexOf('/')));
                    
                    /*увеличение норера изображения*/
                    
                    if (NumberImage < 10) {
                        Image.src = Path + ProjectName + "/0" + NumberImage + ".png";
                    }
                    else {
                        Image.src = Path + ProjectName + "/" + NumberImage + ".png";
                    }
                }
                else {
                    /*изменение изображения*/
                    
                    Images.childNodes[i].className = "image-off";
                    
                    Images.childNodes[i].addEventListener('click', ClickSmallImage(Path), false);
                }
            }
        }
    };
}