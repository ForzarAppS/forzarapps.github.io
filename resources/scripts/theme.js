/*изменение темы*/

function ChangeTheme(Path) {
    let LinkTheme = document.getElementById("link-theme");
    
    switch (localStorage.getItem("theme")) {
        case "light": {
            LinkTheme.href = Path + "night.css";
            
            localStorage.setItem("theme", "night");
            
            break;
        }
        case "night": {
            LinkTheme.href = Path + "light.css";
            
            localStorage.setItem("theme", "light");
            
            break;
        }       
    }
}