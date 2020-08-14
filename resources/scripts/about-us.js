function PersonButton(Path) {
    let Images = document.getElementsByClassName("count-person")[0];
    
    for (let i = 0; i < Images.childNodes.length; i++) {
        if (Images.childNodes[i].tagName == "IMG") {
            if (Images.childNodes[i].className == "image-on") {
                document.getElementById("person_1").style.display = "none";
                
                document.getElementById("person_2").style.display = "block";
                
                Images.childNodes[i].src = Path + "off.png";
                Images.childNodes[i].className = "image-off";
                
                Images.childNodes[i+2].src = Path + "on.png";
                Images.childNodes[i+2].className = "image-on";
                
                break;
            }
            else {
                document.getElementById("person_2").style.display = "none";
                
                document.getElementById("person_1").style.display = "block";
                
                Images.childNodes[i].src = Path + "on.png";
                Images.childNodes[i].className = "image-on";
                
                Images.childNodes[i+2].src = Path + "off.png";
                Images.childNodes[i+2].className = "image-off";
                
                break;
            }
        }
    }
}

function ImageButton(Path) {
    let Image = document.getElementsByClassName("count-person")[0];
    
    Image.onclick = function(e) {
        if (e.target.className == "image-off") {
            let Images = document.getElementsByClassName(e.target.parentElement.className)[0];
            
            for (let i = 0; i < Images.childNodes.length; i++) {
                if (e.target == Images.childNodes[i]) {
                    Images.childNodes[i].src = Path + "on.png";
                    Images.childNodes[i].className = "image-on";
                    
                    
                    switch ((i+1)/2) {
                        case 1: {
                            document.getElementById("person_1").style.display = "block";
                
                            document.getElementById("person_2").style.display = "none";
                            
                            break;
                        }
                        case 2: {
                            document.getElementById("person_1").style.display = "none";
                
                            document.getElementById("person_2").style.display = "block";
                            
                            break;
                        }
                    }
                }
                else {
                    Images.childNodes[i].className = "image-off";
                    Images.childNodes[i].src = Path + "off.png";
                }
            }
        }
    }
}