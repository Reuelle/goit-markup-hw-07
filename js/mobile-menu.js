document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const closeButton = document.getElementById('closeButton');
<<<<<<< HEAD
    const mobileMenu = document.querySelector('.mobile-menu');
    const contactInfo = document.querySelector('.contact-info');
  const mobileIcon = document.querySelector('.mobile-icon');
=======
    const mobileMenu = document.querySelector('.menu');
>>>>>>> 438d67140dcace2250fa143ba1a99c1a0a82b4e6

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show-mobile-menu');
<<<<<<< HEAD
        hamburger.classList.add('hide-hamburger');
        contactInfo.style.display = 'block'; // Hide the contact info
      mobileIcon.style.display = "block";
=======
>>>>>>> 438d67140dcace2250fa143ba1a99c1a0a82b4e6
    });

    // Close mobile menu when close button is clicked
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('show-mobile-menu');
<<<<<<< HEAD
        hamburger.classList.remove('hide-hamburger');
        contactInfo.style.display = 'block'; // Show the contact info
=======
>>>>>>> 438d67140dcace2250fa143ba1a99c1a0a82b4e6
    });
});

