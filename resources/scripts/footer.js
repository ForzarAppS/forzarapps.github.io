function Easter(Text) {
    const FontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
    
    Text.innerHTML = "<div class='emoji' id='tiger' style='float: left; width:" + FontSize + "px; height:" + FontSize + "px'></div>Forzar AppS – 1.4.2(20)<div class='emoji' id='shark' style='width:" + FontSize + "px; height:" + FontSize + "px'></div>";
}