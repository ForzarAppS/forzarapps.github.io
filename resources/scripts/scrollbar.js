function HideShowScrollbar() {
    setInterval(() => document.body.className = "scrollbar-no", 2000);
    document.body.addEventListener('scroll', function() {document.body.className = "scrollbar-yes"});
}

function HideShowButtonUp() {
    window.onload = function() {
        document.body.addEventListener('scroll', function(event) {
            if (event.target.scrollTop >= (document.getElementById("our-projects").getBoundingClientRect().top + event.target.scrollTop - 100)) {
                document.getElementsByClassName("up")[0].style.display = "block";
            }
            else {
                document.getElementsByClassName("up")[0].style.display = "none";
            }
        });
    }
}