document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile Functionality
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    
    // Toggle menu function
    function toggleMenu() {
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Form submission handling
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(bookingForm);
            const bookingData = {};
            formData.forEach((value, key) => {
                bookingData[key] = value;
            });
            
            // Here you would normally send the data to a server
            console.log('Booking submitted:', bookingData);
            
            // Show confirmation (in a real app, you might redirect or show a modal)
            alert('Thank you for your booking! We will contact you shortly to confirm your appointment.');
            
            // Reset form
            bookingForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});