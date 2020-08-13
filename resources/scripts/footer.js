function Easter(Text) {
    const FontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
    
    Text.innerHTML = "<div class='emoji' id='tiger' style='width:" + FontSize + "px; height:" + FontSize + "px'></div><b>Forzar AppS</b> – 1.4.2(20)<div class='emoji' id='shark' style='width:" + FontSize + "px; height:" + FontSize + "px'></div>";
}