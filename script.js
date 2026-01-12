document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .contact-wrapper');
    
    // Add base class for animation
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Handle Reveal Logic
    document.addEventListener('scroll', () => {
        animatedElements.forEach(el => {
            if (el.classList.contains('visible')) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });

    // Mobile Navigation (Simple Toggle - Optional implementation)
    // Add if needed for mobile menu
    
    console.log("Future Tech Portfolio Loaded. Welcome, Upasana.");
});
