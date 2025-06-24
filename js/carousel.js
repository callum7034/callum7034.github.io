document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    
    if (carouselContainer) {
        let slideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.querySelector('.carousel-nav .prev');
        const nextBtn = document.querySelector('.carousel-nav .next');
        
        showSlide(slideIndex);
        
        const autoAdvance = setInterval(function() {
            showSlide(slideIndex + 1);
        }, 5000);
        
        prevBtn.addEventListener('click', function() {
            clearInterval(autoAdvance);
            showSlide(slideIndex - 1);
        });
        
        nextBtn.addEventListener('click', function() {
            clearInterval(autoAdvance);
            showSlide(slideIndex + 1);
        });
        
        function showSlide(n) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            
            slideIndex = n;
            if (slideIndex >= slides.length) { slideIndex = 0; }
            if (slideIndex < 0) { slideIndex = slides.length - 1; }
            
            slides[slideIndex].classList.add('active');
        }
    }
});
