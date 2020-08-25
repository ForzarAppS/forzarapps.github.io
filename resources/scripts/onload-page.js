/*при загрузке страницы*/

function PageOnload(Path) {
    /*запрет на открытие картинок*/
        
    document.oncontextmenu = disablecontext;
    
    /*после загрузки*/
    
    window.onload = function() {  
        /*начальное присвоение темы*/
        
        let LinkTheme = document.getElementById("link-theme");
        
        switch (localStorage.getItem("theme")) {
            case null: {
                LinkTheme.href = Path + "light.css";

                localStorage.setItem("theme", "light");

                break;
            }
            case "light": {
                LinkTheme.href = Path + "light.css";

                break;
            }       
            case "night": {
                LinkTheme.href = Path + "night.css";

                break;
            }       
        }
        
        /*начальное подчёркивание раздела*/
         
        let Sections = document.getElementsByClassName("nav-sections");

        Sections[0].style.borderBottom = "2px solid";
        
        /*закрытие меню при клике по странице*/
        
        document.getElementsByClassName("main")[0].addEventListener('click', function(event) {
            if (document.getElementsByClassName("checkbox")[0].checked) {
                document.getElementsByClassName("checkbox")[0].checked = !document.getElementsByClassName("checkbox")[0].checked;
            }
        });
        
        /*изменение размеров блока точечек*/
        
        let ImageWidth = document.getElementsByClassName("count-person")[0].childNodes[1].offsetWidth;
    
        document.getElementsByClassName("count-person")[0].style.width = ((ImageWidth + 10) * 2) + "px";
        
        /*размер шрифта*/
        
        const FontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
        
         /*изменение размеров изображений*/
        
        ChangeSizeIconProject(document.getElementsByClassName("icon"), document.getElementsByClassName("unit-information"), FontSize);
            
        /*изменение размеров маленьких изображений*/
        
        ChangeSizeSmallImageHashtag(document.getElementsByClassName("hashtag"), FontSize);
        
        ChangeSizeSmallImage(document.getElementsByClassName("link"), FontSize);
        ChangeSizeSmallImage(document.getElementsByClassName("platform"), FontSize);
        ChangeSizeSmallDivImage(document.getElementsByClassName("platform-center"), FontSize);
        ChangeSizeSmallImage(document.getElementsByClassName("image-spoiler"), FontSize);
        
        ChangeSizeSmallDivImage(document.getElementsByClassName("button"), FontSize);
        
        ChangeSizeSmallImageList(FontSize, "switch");
        ChangeSizeSmallImageList(FontSize, "tasks");
        
        /*прокрутка страницы*/
                
        PageScroll(Sections);
    }
}

/*изменение размеров изображений иконок проектов*/

function ChangeSizeIconProject(Icon, Element, FontSize) {
    for (let i = 0; i < Icon.length; i++) {
        if (Icon[i].tagName == "IMG") {
            Icon[i].style.width = (FontSize*4) + "px";
        }
    }
    
    for (let i = 0; i < Element.length; i++) {
        if (Element[i].tagName == "DIV") {
            Element[i].style.marginLeft = ((FontSize*4) + 10) + "px";
        }
    }
}

/*изменение размеров маленьких изображений*/

function ChangeSizeSmallImage(Element, FontSize) {
    for (let i = 0; i < Element.length; i++) {
        if (Element[i].tagName == "DIV") {
            Element[i].style.width = FontSize + "px";
        }
    }
}

/*изменение размеров блоков для маленьких изображений*/

function ChangeSizeSmallDivImage(Element, FontSize) {
    for (let i = 0; i < Element.length; i++) {
        if (Element[i].tagName == "DIV") {
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
        }
    }
}

/*изменение размеров маленьких изображений списков*/

function ChangeSizeSmallImageList(FontSize, TypeList) {
    let Element = document.getElementsByClassName(TypeList);
    
    switch (TypeList) {
        case "switch": {
            for (let i = 0; i < Element.length; i++) {
                for (let j = 0; j < Element[i].childNodes.length; j++) {
                    if (Element[i].childNodes[j].tagName == "LI") {
                        Element[i].childNodes[j].style.backgroundSize = FontSize + "px";
                        Element[i].childNodes[j].style.paddingLeft = (FontSize + 6) + "px";
                        Element[i].childNodes[j].style.backgroundPosition = "left top " + Math.ceil(FontSize/5) + "px";
                    }
                }
            }
            
            break;
        }
        case "tasks": {
            for (let i = 0; i < Element.length; i++) {
                for (let j = 0; j < Element[i].childNodes.length; j++) {
                    if (Element[i].childNodes[j].tagName == "LI") {
                        Element[i].childNodes[j].style.backgroundSize = Math.floor(FontSize/2) + "px";
                        Element[i].childNodes[j].style.paddingLeft = (FontSize + 1) + "px";
                        Element[i].childNodes[j].style.backgroundPosition = "left top " + Math.ceil(FontSize/5) + "px";
                    }
                }
            }
            
            break;
        }
    }
}

/*прокрутка страницы*/

function PageScroll(Sections) {
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

/*запрет на открытие картинок*/

function disablecontext(e) {
	var clickedEl = (e==null) ? event.srcElement.tagName : e.target.tagName;
    
	if (clickedEl == "IMG") {
		return false;
	}
}