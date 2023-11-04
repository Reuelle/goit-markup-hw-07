document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.webpage');

    // Toggle the mobile menu visibility on hamburger click
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('mobile-menu');
    });
});
