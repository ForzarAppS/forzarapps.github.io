/*при загрузке страницы*/

function PageOnload() {
    window.onload = function() {
        /*начальное подчёркивание раздела*/
            
        let Sections = document.getElementsByClassName("nav-sections");

        Sections[0].style.borderBottom = "2px solid";
        
        /*закрытие меню при клике по странице*/
        
        document.getElementsByClassName("main")[0].addEventListener('click', function(event) {
            if (document.getElementsByClassName("checkbox")[0].checked) {
                document.getElementsByClassName("checkbox")[0].checked = !document.getElementsByClassName("checkbox")[0].checked;
            }
        });
        
        /*изменение размеров точечек*/
        
        let ImageWidth = document.getElementsByClassName("count-person")[0].childNodes[1].offsetWidth;
    
        document.getElementsByClassName("count-person")[0].style.width = (ImageWidth * 2) + "px";
        
        /*размер шрифта*/
        
        const FontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
            
        /*изменение размеров маленьких изображений*/
        
        ChangeSizeSmallImageHashtag(document.getElementsByClassName("hashtag"), FontSize);
        
        ChangeSizeSmallImage(document.getElementsByClassName("link"), FontSize);
        ChangeSizeSmallImage(document.getElementsByClassName("platform"), FontSize);
        ChangeSizeSmallImage(document.getElementsByClassName("image-spoiler"), FontSize);
        
        /*прокрутка страницы*/
                
        document.body.addEventListener('scroll', function(event) {
            if (event.target.scrollTop >= (document.getElementById("our-projects").getBoundingClientRect().top + event.target.scrollTop - 100)) {
                document.getElementsByClassName("up")[0].style.display = "block";
            }
            else {
                document.getElementsByClassName("up")[0].style.display = "none";
            }
            
            /*подчёркивание разделов*/
            
            if (event.target.scrollTop <= (document.getElementById("our-projects").getBoundingClientRect().top + event.target.scrollTop - 300)) {
                Sections[0].style.borderBottom = "2px solid";
                Sections[1].style.borderBottom = "none";
                Sections[2].style.borderBottom = "none";
                Sections[3].style.borderBottom = "none";
            }
            else if (event.target.scrollTop <= (document.getElementById("about-us").getBoundingClientRect().top + event.target.scrollTop - 300)) {
                Sections[0].style.borderBottom = "none";
                Sections[1].style.borderBottom = "2px solid";
                Sections[2].style.borderBottom = "none";
                Sections[3].style.borderBottom = "none";
            }
            else if (event.target.scrollTop <= (document.getElementById("contacts").getBoundingClientRect().top + event.target.scrollTop - 400)) {
                Sections[0].style.borderBottom = "none";
                Sections[1].style.borderBottom = "none";
                Sections[2].style.borderBottom = "2px solid";
                Sections[3].style.borderBottom = "none";
            }
            else {
                Sections[0].style.borderBottom = "none";
                Sections[1].style.borderBottom = "none"; 
                Sections[2].style.borderBottom = "none"; 
                Sections[3].style.borderBottom = "2px solid";
            }
            
            /*кнопка вверх*/
            
            let Button = document.getElementsByClassName("up")[0];

            if (event.target.scrollTop >= (document.getElementsByTagName("footer")[0].getBoundingClientRect().top + event.target.scrollTop - window.innerHeight)) {
                Button.style.bottom =(window.innerHeight - document.getElementsByTagName("footer")[0].getBoundingClientRect().top + 5) + "px";
            }
            else {
                Button.style.bottom = "5px";
            }
        });
    }
}

/*изменение размеров маленьких изображений*/

function ChangeSizeSmallImage(Element, FontSize) {
    for (let i = 0; i < Element.length; i++) {
        if (Element[i].tagName == "DIV") {
            Element[i].style.width = FontSize + "px";
            Element[i].style.height = FontSize + "px";
        }
    }
}

/*изменение размеров маленьких изображений хештегов*/

function ChangeSizeSmallImageHashtag(Element, FontSize) {
    for (let i = 0; i < Element.length; i++) {
        if (Element[i].tagName == "DIV") {
            Element[i].style.margin = "-" + ((FontSize / 3) - 1 )+ "px 0";

            Element[i].getElementsByClassName("emoji")[0].style.width = FontSize + "px";
            Element[i].getElementsByClassName("emoji")[0].style.height = FontSize + "px";
        }
    }
}