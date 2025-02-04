window.addEventListener("scroll", function(){
    let nav = document.getElementById("nav");

    if(this.window.scrollY > 20) {
        nav.classList.add("active", "shadow-lg");
    }else {
        nav.classList.remove("active", "shadow-lg");
    }
})