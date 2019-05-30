
window.onload = () => { 
 
   window.addEventListener("click", function (e) {
        let gig_dot_class = document.getElementsByClassName("gig_dot");  
        for (let i = 0; i < gig_dot_class.length; i++) {
            if (e.target === gig_dot_class[i]) {
                currentSlide(i + 1, "gig");
            }
        }

        let ftw_dot_class = document.getElementsByClassName("ftw_dot");
        for (let i = 0; i < ftw_dot_class.length; i++) {
            if (e.target === ftw_dot_class[i]) {
                currentSlide(i + 1, "ftw");
            }
        }

        let imageClass = document.getElementsByClassName("image");
        for (let i = 0; i < imageClass.length; i++) {            
            if (e.target === imageClass[i]) {
                modalFunction(e.target);
            }        
        }
        
       switch (e.target) {       
            case document.getElementsByClassName("ftw_prev")[0]:
                plusSlides(-1, "ftw");
                break;
            case document.getElementsByClassName("ftw_next")[0]:
                plusSlides(1, "ftw");
                break;           
            case document.getElementsByClassName("gig_prev")[0]:
                plusSlides(-1, "gig");
                break;
            case document.getElementsByClassName("gig_next")[0]:
                plusSlides(1, "gig");
                break;         
            case document.getElementById("img01"):
                spanClose();
                break;
            case document.getElementsByClassName("close")[0]:
                spanClose();
                break;
        }
    })     
 
    let gig_hover = document.getElementsByClassName("gig");
    for (let i = 0; i < gig_hover.length; i++) {
        gig_hover[i].addEventListener("mouseover", function() {
            document.getElementsByClassName("gig_prev")[0].style.background = "slategray";
            document.getElementsByClassName("gig_next")[0].style.background = "slategray";
        })
        gig_hover[i].addEventListener("mouseout", function () {
            document.getElementsByClassName("gig_prev")[0].style.background = "white";
            document.getElementsByClassName("gig_next")[0].style.background = "white";
        })
    }

    let gig_prev = document.getElementsByClassName("gig_prev")[0];
    let gig_next = document.getElementsByClassName("gig_next")[0];

    gig_prev.addEventListener("mouseover", () => {
        gig_prev.style.background = "red";
    })

    gig_prev.addEventListener("mouseout", () => {
        gig_prev.style.background = "white";
    })

    gig_next.addEventListener("mouseover", () => {
        gig_next.style.background = "red";
    })

    gig_next.addEventListener("mouseout", () => {
        gig_next.style.background = "white";
    })
 

    let slideIndex = 1;
    showSlides(slideIndex, "gig");
    showSlides(slideIndex, "ftw");
    // Next/previous controls
    function plusSlides(n, className) {
        showSlides(slideIndex += n, className);
    }

    // Thumbnail image controls
    function currentSlide(n, className) {
        showSlides(slideIndex = n, className);
    }

    function showSlides(n, className) {
        let i;
        let slides = document.getElementsByClassName(className);
        let dots = document.getElementsByClassName(className + "_dot");

        if (n > slides.length) {slideIndex = 1} 

        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
    }

    let modal = document.getElementById("myModal");

    function modalFunction(e) {
        let modalImg = document.getElementById("img01");

        modal.style.display = "block";
        modalImg.src = e.src;
    }

    function spanClose() {
        modal.style.display = "none";
    } 
    
}