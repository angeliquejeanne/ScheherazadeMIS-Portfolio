const hamBurger=document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function() {
    document.querySelector(".navbar").classList.toggle("show");
})