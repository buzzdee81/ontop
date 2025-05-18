// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Band Members Data
    const bandMembers = [
        {
            name: 'Max Mustermann',
            instrument: 'Gesang',
            image: 'images/member1.jpg',
            description: 'Frontmann der Band seit 1998'
        },
        {
            name: 'Lisa Schmidt',
            instrument: 'Keyboard',
            image: 'images/member2.jpg',
            description: 'Virtuose an den Tasten'
        },
        {
            name: 'Tom Weber',
            instrument: 'Gitarre',
            image: 'images/member3.jpg',
            description: 'Gitarrenvirtuose mit Herz'
        },
        {
            name: 'Anna Bauer',
            instrument: 'Bass',
            image: 'images/member4.jpg',
            description: 'Groove ist ihr zweiter Name'
        },
        {
            name: 'Michael Koch',
            instrument: 'Schlagzeug',
            image: 'images/member5.jpg',
            description: 'Der Rhythmus im Blut'
        },
        {
            name: 'Julia Wagner',
            instrument: 'Saxophon',
            image: 'images/member6.jpg',
            description: 'Bläserin mit Leidenschaft'
        }
    ];

    // Render Band Members
    const bandMembersContainer = document.querySelector('.band-members');
    if (bandMembersContainer) {
        bandMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <div class="member-info">
                    <h3>${member.name}</h3>
                    <h4>${member.instrument}</h4>
                    <p>${member.description}</p>
                </div>
            `;
            bandMembersContainer.appendChild(memberCard);
        });
    }

    // Gallery Data
    const galleryImages = [
        'images/gallery1.jpg',
        'images/gallery2.jpg',
        'images/gallery3.jpg',
        'images/gallery4.jpg',
        'images/gallery5.jpg',
        'images/gallery6.jpg'
    ];

    // Render Gallery
    const galleryContainer = document.querySelector('.media-gallery');
    if (galleryContainer) {
        galleryImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${image}" alt="Band Impression">
            `;
            galleryContainer.appendChild(galleryItem);
        });
    }

    // Contact Form Handling
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Here you would typically send the data to a server
            console.log('Form submitted:', formObject);
            
            // Show success message
            alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.');
            this.reset();
        });
    }

    // Scroll-based animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature, .member-card, .category');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial animation check
    animateOnScroll();
    
    // Animation on scroll
    window.addEventListener('scroll', animateOnScroll);
}); 