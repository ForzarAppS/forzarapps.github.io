function HideShowScrollBar() {
    setInterval(() => document.body.className = "scrollbar-no", 2000);
    document.body.addEventListener('scroll', function() {
        document.body.className = "scrollbar-yes";
    });
}

function PageUp() {
    document.body.scrollTop = 0;
}

function Anchor(Name) {
    document.body.scrollTop = document.getElementById(Name).getBoundingClientRect().top + document.body.scrollTop - 88;
}