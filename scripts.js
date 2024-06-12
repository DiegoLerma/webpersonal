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
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
            slide.style.display = (i === index) ? 'block' : 'none';
        });
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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initialize slider position
    showSlide(currentProjectIndex);
});
