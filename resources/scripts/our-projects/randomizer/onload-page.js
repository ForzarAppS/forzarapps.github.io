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

        Sections[1].style.borderBottom = "2px solid";
        
        /*размер шрифта*/
        
        const FontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
        
        let CountButton = document.getElementsByTagName("button").length;
        
        for (let i = 0; i <= CountButton-1; i++) {
            document.getElementsByTagName("button")[i].style.fontSize = FontSize + "px";
        }
    }
}

/*запрет на открытие картинок*/

function disablecontext(e) {
	var clickedEl = (e==null) ? event.srcElement.tagName : e.target.tagName;
    
	if (clickedEl == "IMG") {
		return false;
	}
}