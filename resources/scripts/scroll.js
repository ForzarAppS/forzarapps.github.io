/*спрятать скроллбар*/

function HideShowScrollBar(Time) {
    /*спрятать через время*/
    
    setInterval(() => document.body.className = "scrollbar-no", Time);
    
    /*показать*/
    
    document.body.addEventListener('scroll', function() {
        document.body.className = "scrollbar-yes";
    });
}

/*поднять наверх*/

function PageUp() {
    document.body.scrollTop = 0;
    
    /*спрятать меню*/
    
    document.getElementsByClassName("checkbox")[0].checked = false;
}

/*прокрутка до нужного раздела*/

function Anchor(Name, Link) {
    document.body.scrollTop = document.getElementById(Name).getBoundingClientRect().top + document.body.scrollTop - 88;
    
    /*если не текущий раздел, то спрятать меню*/
    
    if (Link.style.borderBottom != "2px solid") {
        document.getElementsByClassName("checkbox")[0].checked = false;
    }
}