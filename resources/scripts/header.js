function AutoChangeLogo(Time, Path) {
    let Logo = document.getElementById("logo");
    let i = 0;

    setInterval(function() {
        i++;
        switch (i) {
            case 1: {
                Logo.src = Path + "F.png";
                
                break;
            }
            case 2: {
                Logo.src = Path + "A.png";
                
                break;
            }
            case 3: {
                i = 0;
                Logo.src = Path + "FAS.png";
                
                break;
            }
        }
    }, Time);
}