

const heroSection = document.querySelector('.hero');

const altBackgroundClass = 'alt-bg-1';

let isAltBackground = false;

setInterval(() => {
    if (isAltBackground) {
    
        heroSection.classList.remove(altBackgroundClass);
    } else {
        
        heroSection.classList.add(altBackgroundClass);
    }

    
    isAltBackground = !isAltBackground;
}, 5000);
