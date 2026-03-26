// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const skillFills = document.querySelectorAll('.skill-fill');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Dropdown toggle for mobile
const dropdownTriggers = document.querySelectorAll('.nav-item.dropdown .nav-link');
dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        // Only prevent default on mobile (small screens)
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('active');
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for anchor links (exclude dropdown toggles)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.classList.contains('dropdown-toggle')) return;
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        return;
    }

    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Animate skill bars on scroll
const animateSkillBars = () => {
    skillFills.forEach(skillFill => {
        const rect = skillFill.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            skillFill.style.width = skillFill.style.width;
        }
    });
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.project-card, .about-card, .skill-category, .education-item');
animateElements.forEach(el => observer.observe(el));

// Add animation classes
const style = document.createElement('style');
style.textContent = `
    .project-card, .about-card, .skill-category, .education-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Typewriter effect for hero section (optional enhancement)
const typeWriter = (element, text, speed = 50) => {
    let i = 0;
    element.innerHTML = '';
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    type();
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars initially
    animateSkillBars();

    // Add scroll event listener for skill bars
    window.addEventListener('scroll', animateSkillBars);
});

// Console message for developers
console.log('%c 김경학의 포트폴리오에 오신 것을 환영합니다! ', 'background: #6366f1; color: white; padding: 10px; border-radius: 5px;');
