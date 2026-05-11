// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Animate skill tags on scroll
const skillTags = document.querySelectorAll('.skill-tag');

const animateOnScroll = () => {
    skillTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (tagTop < windowHeight - 50) {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }
    });
};

// Initial check for skills in viewport
animateOnScroll();

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const animateTimeline = () => {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
};

// Set initial state for timeline items - make them visible by default
timelineItems.forEach(item => {
    item.style.opacity = '1';
    item.style.transform = 'translateX(0)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Apply animation effect only when scrolling
window.addEventListener('scroll', () => {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            // Item is in view, ensure it's fully visible
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        } else {
            // Item is out of view, apply subtle animation state
            item.style.opacity = '0.8';
            item.style.transform = 'translateX(-10px)';
        }
    });
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');

const animateProjects = () => {
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for project cards
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Initial check for project cards in viewport
animateProjects();

// Listen for scroll events for projects
window.addEventListener('scroll', animateProjects);

// Animate highlight cards on scroll
const highlightCards = document.querySelectorAll('.highlight-card');

const animateHighlights = () => {
    highlightCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for highlight cards
highlightCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Initial check for highlight cards in viewport
animateHighlights();

// Listen for scroll events for highlights
window.addEventListener('scroll', animateHighlights);

// Add loading animation for hero section
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
});

// Add intersection observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add CSS for observed animations
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    section.animate {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 20px 0;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .nav-links.active li {
        margin: 10px 0;
        text-align: center;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Add scroll effect to navigation
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});