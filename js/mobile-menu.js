document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const closeButton = document.getElementById('closeButton');
    const mobileMenu = document.querySelector('.webpage');

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.add('show-mobile-menu');
    });

    // Close mobile menu when close button is clicked
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('show-mobile-menu');
    });
});
