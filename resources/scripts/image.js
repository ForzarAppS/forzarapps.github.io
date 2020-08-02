function ChangeImage(){
    let Image = document.getElementById("logo");

    switch(Image.src.substr(Image.src.lastIndexOf('/') + 1)) {
        case 'FAS.png': {
            Image.src = "resources/images/F.png";
            
            break;
        }
        case 'F.png': {
            Image.src = "resources/images/A.png";
            
            break;
        }
        case 'A.png': {
            Image.src = "resources/images/FAS.png";
            
            break;
        }
    }
}