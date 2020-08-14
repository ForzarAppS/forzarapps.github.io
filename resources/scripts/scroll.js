function HideShowScrollBar() {
    setInterval(() => document.body.className = "scrollbar-no", 2000);
    document.body.addEventListener('scroll', function() {
        document.body.className = "scrollbar-yes";
    });
}

function PageUp() {
    document.body.scrollTop = 0;
    
    document.getElementsByClassName("checkbox")[0].checked = false;
}

function Anchor(Name, Link) {
    document.body.scrollTop = document.getElementById(Name).getBoundingClientRect().top + document.body.scrollTop - 88;
    
    if (Link.style.borderBottom != "2px solid") {
        document.getElementsByClassName("checkbox")[0].checked = false;
    }
}