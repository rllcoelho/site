// Portfolio Scripts

// Mobile menu toggle
const menuButton = document.querySelector('button.md\\:hidden');
const navMenu = document.querySelector('.hidden.md\\:flex');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');
        navMenu.classList.toggle('flex-col');
        navMenu.classList.toggle('absolute');
        navMenu.classList.toggle('top-16');
        navMenu.classList.toggle('left-0');
        navMenu.classList.toggle('right-0');
        navMenu.classList.toggle('bg-white');
        navMenu.classList.toggle('p-6');
        navMenu.classList.toggle('shadow-lg');
        navMenu.classList.toggle('space-y-4');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (!navMenu.classList.contains('hidden')) {
                menuButton.click();
            }
        }
    });
});


// Add hover effect to project cards
const projectCards = document.querySelectorAll('.bg-white.rounded-xl');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('shadow-2xl');
        card.classList.add('translate-y-[-5px]');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('shadow-2xl');
        card.classList.remove('translate-y-[-5px]');
    });
});

// Year update already in HTML inline script