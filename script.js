


window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Small delay for visual impact
    setTimeout(() => {
        preloader.classList.add('fade-out');
        
        // Optional: Re-enable scrolling after fade
        document.body.style.overflow = 'visible';
    }, 1000); 
});

// Prevent scrolling while loading
document.body.style.overflow = 'hidden';


