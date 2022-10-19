let dynamicIcon = document.querySelector(".nav-toggler")
let nav = document.querySelector("nav");
dynamicIcon.addEventListener("click", function(e){
    dynamicIcon.classList.toggle('active');
    nav.classList.toggle("active");
})