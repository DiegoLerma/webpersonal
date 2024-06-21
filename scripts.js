document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Teléfono:', phone);
        console.log('Mensaje:', message);

        alert('Gracias por contactarme, te responderé pronto.');
        form.reset();
    });

    // Slider for projects
    const projectSlides = document.querySelectorAll('#project-slider .project-slide');
    let currentProjectIndex = 0;

    function showSlide(index) {
        projectSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.display = 'none';
        });
        projectSlides[index].classList.add('active');
        projectSlides[index].style.display = 'flex';
    }

    function showNextProjectSlide() {
        currentProjectIndex = (currentProjectIndex + 1) % projectSlides.length;
        showSlide(currentProjectIndex);
    }

    function showPrevProjectSlide() {
        currentProjectIndex = (currentProjectIndex - 1 + projectSlides.length) % projectSlides.length;
        showSlide(currentProjectIndex);
    }

    setInterval(showNextProjectSlide, 7000);

    document.querySelector('.project-prev').addEventListener('click', showPrevProjectSlide);
    document.querySelector('.project-next').addEventListener('click', showNextProjectSlide);

    // Scroll animations
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initialize slider position
    showSlide(currentProjectIndex);

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const lightThemeClass = 'light-theme';
    const icon = themeToggle.querySelector('i');

    function setTheme(isLight) {
        if (isLight) {
            body.classList.add(lightThemeClass);
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            body.classList.remove(lightThemeClass);
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
        localStorage.setItem('isLightTheme', isLight);
    }

    themeToggle.addEventListener('click', () => {
        const isLight = !body.classList.contains(lightThemeClass);
        setTheme(isLight);
    });

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('isLightTheme') === 'true';
    setTheme(savedTheme);
});
