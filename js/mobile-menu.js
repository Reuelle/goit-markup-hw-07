document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const closeButton = document.getElementById('closeButton');
    const mobileMenu = document.querySelector('.mobile-menu');
    const contactInfo = document.querySelector('.contact-info');
  const mobileIcon = document.querySelector('.mobile-icon');

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show-mobile-menu');
        hamburger.classList.add('hide-hamburger');
        contactInfo.style.display = 'block'; // Hide the contact info
      mobileIcon.style.display = "block";
    });

    // Close mobile menu when close button is clicked
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('show-mobile-menu');
        hamburger.classList.remove('hide-hamburger');
        contactInfo.style.display = 'block'; // Show the contact info
    });
});

