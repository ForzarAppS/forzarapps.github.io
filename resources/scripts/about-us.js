function PersonButton() {
    let Images = document.getElementsByClassName("count-person")[0];
    
    for (let i = 0; i < Images.childNodes.length; i++) {
        if (Images.childNodes[i].tagName == "IMG") {
            if (Images.childNodes[i].className == "image-on") {
                document.getElementById("person_1").style.display = "none";
                
                document.getElementById("person_2").style.display = "block";
                
                Images.childNodes[i].src = "resources/images/off.png";
                Images.childNodes[i].className = "image-off";
                
                Images.childNodes[i+2].src = "resources/images/on.png";
                Images.childNodes[i+2].className = "image-on";
                
                break;
            }
            else {
                document.getElementById("person_2").style.display = "none";
                
                document.getElementById("person_1").style.display = "block";
                
                Images.childNodes[i].src = "resources/images/on.png";
                Images.childNodes[i].className = "image-on";
                
                Images.childNodes[i+2].src = "resources/images/off.png";
                Images.childNodes[i+2].className = "image-off";
                
                break;
            }
        }
    }
}