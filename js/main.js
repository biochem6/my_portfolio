
window.onload = () => { 
   
    window.addEventListener("click", (e) => {
        switch(e.target) {
            case document.getElementById("prev"):
                plusSlides(-1);
                break;
            case document.getElementById("next"):
                plusSlides(1);
                break;
            case document.getElementById("1"):
                currentSlide(1);
                break;
            case document.getElementById("2"):
                currentSlide(2);
                break;
            case document.getElementById("3"):
                currentSlide(3);
                break;
            case document.getElementById("4"):
                currentSlide(4);
                break;
            case document.getElementById("5"):
                currentSlide(5);
                break;
            case document.getElementsByClassName("image01")[0]:
                modalFunction(e.target);
                break;
            case document.getElementsByClassName("close")[0]:
                spanClose();
                break;
        }        
    })

    let imageClass = document.getElementsByClassName("image");
    for (let i = 0; i < imageClass.length; i++) {
        window.addEventListener("click", (e) => {
            if (e.target === imageClass[i]) {
                modalFunction(e.target);
            }
        })
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

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