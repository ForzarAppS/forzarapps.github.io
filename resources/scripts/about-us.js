/*боковые кнопки*/

function PersonButton(Path) {
    /*блок с маленькими изображениями*/
    
    let CountImages = document.getElementsByClassName("count-person")[0];
    
    /*участники*/
    
    let Person1 = ddocument.getElementById("person_1");
    let Person2 = document.getElementById("person_2");
    
    for (let i = 0; i < CountImages.childNodes.length; i++) {
        if (CountImages.childNodes[i].tagName == "IMG") {
            if (CountImages.childNodes[i].className == "image-on") {
                /*изменение участников*/
                
                Person1.style.display = "none";
                Person2.style.display = "block";
                
                /*изменение изображений*/
                
                CountImages.childNodes[i].src = Path + "off.png";
                CountImages.childNodes[i].className = "image-off";
                
                CountImages.childNodes[i+2].src = Path + "on.png";
                CountImages.childNodes[i+2].className = "image-on";
                
                break;
            }
            else {
                /*изменение участников*/
                
                Person2.style.display = "none";
                Person1.style.display = "block";
                
                /*изменение изображений*/
                
                CountImages.childNodes[i].src = Path + "on.png";
                CountImages.childNodes[i].className = "image-on";
                
                CountImages.childNodes[i+2].src = Path + "off.png";
                CountImages.childNodes[i+2].className = "image-off";
                
                break;
            }
        }
    }
}

/*точечки*/

function ImageButton(Path) {
    /*блок с маленькими изображениями*/
    
    let CountImages = document.getElementsByClassName("count-person")[0];
    
    /*участники*/
    
    let Person1 = ddocument.getElementById("person_1");
    let Person2 = document.getElementById("person_2");
    
    CountImages.onclick = function(e) {
        if (e.target.className == "image-off") {
            /*точечки*/
            
            let Images = document.getElementsByClassName(e.target.parentElement.className)[0];
            
            for (let i = 0; i < Images.childNodes.length; i++) {
                /*изображение по которому совершён клик*/
                
                if (e.target == Images.childNodes[i]) {
                    /*изменение изображений*/
                    
                    Images.childNodes[i].src = Path + "on.png";
                    Images.childNodes[i].className = "image-on";
                    
                    
                    switch ((i+1)/2) {
                        case 1: {
                            /*изменение участников*/
                            
                            Person1.style.display = "block";
                            Person2.style.display = "none";
                            
                            break;
                        }
                        case 2: {
                            /*изменение участников*/
                            
                            Person1.style.display = "none";
                            Person2.style.display = "block";
                            
                            break;
                        }
                    }
                }
                else {
                    /*изменение изображений*/
                    
                    Images.childNodes[i].className = "image-off";
                    Images.childNodes[i].src = Path + "off.png";
                }
            }
        }
    }
}