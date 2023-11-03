document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.webpage');
    const closeButton = document.getElementById('closeButton');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('mobile-menu');
    });

    closeButton.addEventListener('click', function() {
        nav.classList.remove('mobile-menu');
    });
});

