//partie portfolio
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;
    for(let i=0; i<filterButtons.length; i++)
    {
        filterButtons[i].addEventListener("click",function()
        {
            for(let j=0; j<filterButtons.length; j++)
            {
                filterButtons[j].classList.remove("active")
            }
            this.classList.add("active");
            const target=this.getAttribute("data-target")
            for(let k=0; k<items.length; k++)
            {
                items[k].style.display="none";
                if(target==items[k].getAttribute("data-id"))
                {
                    items[k].style.display="block";
                }
                if(target=="all")
                {
                    items[k].style.display="block";
                }
            }
           
        })
    }

// partie lightbox    
const closeLightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightboxImage=lightbox.querySelector("img");

lightbox.addEventListener("click",function(){
    if(event.target!=lightboxImage){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})

closeLightbox.addEventListener("click", function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");
    galleryItem.forEach(function(element)
    {
        element.querySelector(".fa-plus").addEventListener("click", function(){
            lightbox.classList.remove("hide");
            lightbox.classList.add("show");
            lightboxImage.src=element.querySelector("img").getAttribute("src")
        })
    })

//Testimonial slider
const sliderContainer=document.querySelector(".testi-slider");
const slides=sliderContainer.children;
const containerWidth=sliderContainer.offsetWidth;
const margin=30;
let itemPerSlide=0;
let slideDots;

const responsive=[
    {breakPoint:{width:0, item:1}}, 
    {breakPoint:{width:991, item:2}} 
]

function load()
{
    for(let i=0; i<responsive.length; i++)
    {
        if(window.innerWidth>responsive[i].breakPoint.width)
        {
            itemPerSlide=responsive[i].breakPoint.item;
        }
    }
    start();
}
function start()
{
    totalWidth=0;
    for(let i=0; i<slides.length; i++)
    {
        slides[i].style.width=(containerWidth/itemPerSlide)-margin + "px";
        slides[i].style.margin=margin/2 + "px";
        totalWidth+=containerWidth/itemPerSlide;
    }
    sliderContainer.style.width=totalWidth + "px";
    slideDots=Math.ceil(slides.length/itemPerSlide);

    for(let i=0; i<slideDots; i++)
    {
        const div=document.createElement("div");
        div.id=i;
        div.setAttribute("onclick","controlSlide(this)");
        if(i==0)
        {
            div.classList.add("active");
        }
        document.querySelector(".slide-controls").appendChild(div);
    }

}
let currentSlide=0;
let autoSlide=0;

function controlSlide(element){
    clearInterval(timer)
    timer=setInterval(autoPlay,5000);
    autoSlide=element.id;
currentSlide=element.id;
changeSlide(currentSlide)
}

function changeSlide(currentSlide){
    controlButtons=document.querySelector(".slide-controls").children;

    for(let i=0; i<controlButtons.length; i++){
            controlButtons[i].classList.remove("active")
    }
    controlButtons[currentSlide].classList.add("active")
    sliderContainer.style.marginLeft=-(containerWidth*currentSlide) + "px";
}
function autoPlay(){
    if(autoSlide==slideDots-1){
        autoSlide=0;
    }
    else{
        autoSlide++;
    }
    changeSlide(autoSlide);
}
let timer=setInterval(autoPlay,5000);


window.onload=load();

// header fixed
window.onscroll=function()
{
    const docScrollTop=document.documentElement.scrollTop;  
    if(window.innerWidth>991)
    {
        if(docScrollTop>100)
        {
            document.querySelector("header").classList.add("fixed")
        }
        else
        {
            document.querySelector("header").classList.remove("fixed")
        }
    }
}

const navbar = document.querySelector(".navbar");
    a=navbar.querySelectorAll("a");

    a.forEach(function(element)
    {
        element.addEventListener("click", function()
        {
            for(let i=0; i<a.length; i++)
            {
                a[i].classList.remove("active");
            }
            this.classList.add("active")
            document.querySelector(".navbar").classList.toggle("show");
        })
    })

// burger-menu
const hamBurger=document.querySelector(".ham-burger");
hamBurger.addEventListener("click",function()
{
    document.querySelector(".navbar").classList.toggle("show");
})
