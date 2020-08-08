function HideShowScrollbar() {
    setInterval(() => document.body.className = "scrollbar-no", 2000);
    document.body.addEventListener('scroll', function() {document.body.className = "scrollbar-yes"});
}

function ButtonUp_LinkUnderline() {
    window.onload = function() {
        document.body.addEventListener('scroll', function(event) {
            if (event.target.scrollTop >= (document.getElementById("our-projects").getBoundingClientRect().top + event.target.scrollTop - 100)) {
                document.getElementsByClassName("up")[0].style.display = "block";
            }
            else {
                document.getElementsByClassName("up")[0].style.display = "none";
            }
            
            if (event.target.scrollTop <= (document.getElementById("our-projects").getBoundingClientRect().top + event.target.scrollTop - 300)) {
                document.getElementsByClassName("nav-sections")[0].style.borderBottom = "2px solid";
                document.getElementsByClassName("nav-sections")[1].style.borderBottom = "none";
                document.getElementsByClassName("nav-sections")[2].style.borderBottom = "none";
                document.getElementsByClassName("nav-sections")[3].style.borderBottom = "none";
            }
            else if (event.target.scrollTop <= (document.getElementById("about-us").getBoundingClientRect().top + event.target.scrollTop - 300)) {
                document.getElementsByClassName("nav-sections")[0].style.borderBottom = "none";
                document.getElementsByClassName("nav-sections")[1].style.borderBottom = "2px solid";
                document.getElementsByClassName("nav-sections")[2].style.borderBottom = "none";
                document.getElementsByClassName("nav-sections")[3].style.borderBottom = "none";
            }
            else if (event.target.scrollTop <= (document.getElementById("contacts").getBoundingClientRect().top + event.target.scrollTop - 400)) {
                document.getElementsByClassName("nav-sections")[0].style.borderBottom = "none";
                document.getElementsByClassName("nav-sections")[1].style.borderBottom = "none";
                document.getElementsByClassName("nav-sections")[2].style.borderBottom = "2px solid";
                document.getElementsByClassName("nav-sections")[3].style.borderBottom = "none";
            }
            else {
                document.getElementsByClassName("nav-sections")[0].style.borderBottom = "none";
                document.getElementsByClassName("nav-sections")[1].style.borderBottom = "none";
                document.getElementsByClassName("nav-sections")[2].style.borderBottom = "none";
                document.getElementsByClassName("nav-sections")[3].style.borderBottom = "2px solid";
            }
        });
    }
}