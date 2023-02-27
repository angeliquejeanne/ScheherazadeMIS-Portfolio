//partie portfolio
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;

for(let i=0; i<filterButtons.length; i++) {
    filterButtons[i].addEventListener("click",function() {
        for(let j=0; j<filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        
        this.classList.add("active");
        const target=this.getAttribute("data-target")

        for(let k=0; k<items.length; k++) {
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id")) {
                items[k].style.display="block";
            }
            if(target=="all") {
                items[k].style.display="block";
            }
        }
    })
}

// partie lightbox    
const closeLightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightboxImage=lightbox.querySelector("img");

lightbox.addEventListener("click",function() {
    if(event.tTarget!=lightboxImage) {
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})

closeLightbox.addEventListener("click", function() {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");

galleryItem.forEach(function(element) {
    element.querySelector(".fa-plus").addEventListener("click", function() {
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboxImage.src=element.querySelector("img").getAttribute("src")
    })
})
