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

function load() {
    for(let i=0; i<responsive.length; i++) {
        if(window.innerWidth>responsive[i].breakPoint.width) {
            itemPerSlide=responsive[i].breakPoint.item;
        }
    }
    start();
}

function start() {
    totalWidth=0;
    for(let i=0; i<slides.length; i++) {
        slides[i].style.width=(containerWidth/itemPerSlide)-margin + "px";
        slides[i].style.margin=margin/2 + "px";
        totalWidth+=containerWidth/itemPerSlide;
    }
    sliderContainer.style.width=totalWidth + "px";
    slideDots=Math.ceil(slides.length/itemPerSlide);

    for(let i=0; i<slideDots; i++) {
        const div=document.createElement("div");
        div.id=i;
        div.setAttribute("onclick","controlSlide(this)");
        if(i==0) {
            div.classList.add("active");
        }
        document.querySelector(".slide-controls").appendChild(div);
    }

}

let currentSlide=0;
let autoSlide=0;

function controlSlide(element) {
    clearInterval(timer)
    timer=setInterval(autoPlay,5000);
    autoSlide=element.id;
    currentSlide=element.id;
    changeSlide(currentSlide)
}

function changeSlide(currentSlide) {
    controlButtons=document.querySelector(".slide-controls").children;

    for(let i=0; i<controlButtons.length; i++) {
            controlButtons[i].classList.remove("active")
    }
    controlButtons[currentSlide].classList.add("active")
    sliderContainer.style.marginLeft=-(containerWidth*currentSlide) + "px";
}

function autoPlay() {
    if(autoSlide==slideDots-1) {
        autoSlide=0;
    }
    else {
        autoSlide++;
    }
    changeSlide(autoSlide);
}

let timer=setInterval(autoPlay,5000);

window.onload=load();