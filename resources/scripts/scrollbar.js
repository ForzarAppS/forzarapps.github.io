function HideShowScrollbar() {
    setInterval(() => document.body.className = "scrollbar-no", 2000);
    document.body.addEventListener('scroll', function() {document.body.className = "scrollbar-yes"});
}

function HideShowButtonUp() {
    document.body.addEventListener('scroll', function(event) {
        if (event.target.scrollTop > 600) {
            document.getElementById("up").style.display = "block";
        }
        else {
            document.getElementById("up").style.display = "none";
        }
    });
}