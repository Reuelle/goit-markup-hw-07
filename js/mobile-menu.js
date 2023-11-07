document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.querySelector('.menu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    hamburger.addEventListener('click', function(e) {
        mobileMenu.classList.toggle('show-mobile-menu');
        mobileMenuOverlay.classList.toggle('show-overlay');
        e.stopPropagation();
    });

    mobileMenuOverlay.addEventListener('click', function() {
        mobileMenu.classList.remove('show-mobile-menu');
        mobileMenuOverlay.classList.remove('show-overlay');
    });

    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('show-mobile-menu');
            mobileMenuOverlay.classList.remove('show-overlay');
        }
    });
});
