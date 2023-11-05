document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const closeButton = document.getElementById('closeButton');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileIcon = document.querySelector('.mobile-icon');

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show-mobile-menu');
        mobileIcon.style.display = 'none'; // Hide the hamburger icon
    });

    // Close mobile menu when close button is clicked
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('show-mobile-menu');
        mobileIcon.style.display = 'block'; // Show the hamburger icon
    });
});
