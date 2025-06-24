document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if(this.getAttribute('href').includes('#') && !this.getAttribute('href').startsWith('../')) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);
            
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

if (!document.querySelector('style#mobile-styles')) {
    const mobileStyles = document.createElement('style');
    mobileStyles.id = 'mobile-styles';
    mobileStyles.textContent = `
        @media screen and (max-width: 768px) {
            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 70px;
                left: 0;
                right: 0;
                background: white;
                box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                padding: 1rem;
            }
            .nav-links.active {
                display: flex;
            }
            .menu-toggle {
                display: block;
            }
            .nav-links li {
                margin: 0.5rem 0;
            }
        }
    `;
    document.head.appendChild(mobileStyles);
}
