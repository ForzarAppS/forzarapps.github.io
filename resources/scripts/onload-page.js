function PageOnload() {
    window.onload = function() {
        document.getElementsByClassName("nav-sections")[0].style.borderBottom = "2px solid";
        
        const FontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
    
        let Hashtag =  document.getElementsByClassName("hashtag");
            
        for (let i = 0; i < Hashtag.length; i++) {
            if (Hashtag[i].tagName == "DIV") {
                Hashtag[i].style.margin = "-" + ((FontSize / 3) - 1 )+ "px 0";
                
                Hashtag[i].getElementsByClassName("emoji")[0].style.width = FontSize + "px";
                Hashtag[i].getElementsByClassName("emoji")[0].style.height = FontSize + "px";
            }
        }
        
        let Link =  document.getElementsByClassName("link");
        
        for (let i = 0; i < Link.length; i++) {
            if (Link[i].tagName == "DIV") {
                Link[i].style.width = FontSize + "px";
                Link[i].style.height = FontSize + "px";
            }
        }
                
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

            if (event.target.scrollTop >= (document.getElementsByTagName("footer")[0].getBoundingClientRect().top + event.target.scrollTop - window.innerHeight)) {
                document.getElementsByClassName("up")[0].style.bottom =(window.innerHeight - document.getElementsByTagName("footer")[0].getBoundingClientRect().top + 5) + "px";
            }
            else {
                document.getElementsByClassName("up")[0].style.bottom = "5px";
            }
        });
    }
}