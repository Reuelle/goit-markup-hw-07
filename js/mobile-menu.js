document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.webpage');
<<<<<<< HEAD

    // Toggle the mobile menu visibility on hamburger click
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('mobile-menu');
    });
});
=======
    const closeButton = document.getElementById('closeButton');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('mobile-menu');
    });

    closeButton.addEventListener('click', function() {
        nav.classList.remove('mobile-menu');
    });
});

>>>>>>> a1f3fe82571727ec4ae363889deddfa5d8aebbd0
