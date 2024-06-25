document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');

    // Variables para contar los clics
    let clicksOnCards = {};
    let clicksOnProjects = {};

    // Capturar clics en tarjetas de formación académica
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            if (!clicksOnCards[id]) {
                clicksOnCards[id] = 0;
            }
            clicksOnCards[id]++;
        });
    });

    // Capturar clics en proyectos
    document.querySelectorAll('.project-slide').forEach(project => {
        project.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            if (!clicksOnProjects[id]) {
                clicksOnProjects[id] = 0;
            }
            clicksOnProjects[id]++;
        });
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        const whatsappMessage = `Hola, mi nombre es: ${name}. Vengo de tu página web y me gustaría contactarte para decirte lo siguiente:%0A${message}`;
        const whatsappURL = `https://wa.me/524737390870?text=${whatsappMessage}`;

        // Convertir los clics a una cadena de texto
        const clicksOnCardsText = JSON.stringify(clicksOnCards, null, 2);
        const clicksOnProjectsText = JSON.stringify(clicksOnProjects, null, 2);

        // Enviar correo electrónico con EmailJS
        const serviceID = 'service_cxzi14y';
        const templateID = 'template_j15b4n7'; // Reemplaza con tu Template ID de EmailJS

        emailjs.send(serviceID, templateID, {
            from_name: name,
            contact_mail: email,
            contact_phone: phone,
            message: message,
            clicksOnCards: clicksOnCardsText,
            clicksOnProjects: clicksOnProjectsText
        })
        .then(() => {
            alert('¡Gracias por enviarme mensaje. Te contactaré a la brevedad posible!');
            contactForm.reset();

            // Redirigir a WhatsApp
            // window.open(whatsappURL, '_blank');
        }, (err) => {
            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
            console.error('Error:', err);
        });
    });

    // Slider for projects
    const projectSlides = document.querySelectorAll('#project-slider .project-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentIndex = 0;
    let currentProjectIndex = 0;

    function showSlide(index) {
        projectSlides.forEach((slide, i) => {
            slide.style.display = 'none';
            dots[i].classList.remove('active');
        });
        projectSlides[index].style.display = 'flex';
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % projectSlides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + projectSlides.length) % projectSlides.length;
        showSlide(currentIndex);
    }

    document.querySelector('.project-next').addEventListener('click', nextSlide);
    document.querySelector('.project-prev').addEventListener('click', prevSlide);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            currentIndex = index;
        });
    });

    showSlide(currentIndex);

    // Add swipe functionality
    let startX;
    const slider = document.querySelector('.project-slider');

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!startX) return;
        let diffX = startX - e.touches[0].clientX;

        if (diffX > 50) {
            nextSlide();
            startX = null;
        } else if (diffX < -50) {
            prevSlide();
            startX = null;
        }
    });
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
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            body.classList.remove(lightThemeClass);
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
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

function showModal(id) {
    const descriptions = {
        'Médico Cirujano (General)': `Tengo una amplia formación en Medicina por parte de la Universidad de Guanajuato. Allí, aprendí a entender los procesos de enfermedad en el cuerpo humano como entidades compuestas por procesos biológicos, psicológicos y sociales. Cada uno de estos componentes aporta en cierta proporción para que el paciente: abandone su estado natural de estar sano, se enferme y se superen los mecanismos propios del organismo para recuperarse espontáneamente. 
        
        El médico tiene importante la encomienda de entender cada uno de los procesos del organismo para detectar en qué lugares se encuentra el daño y repararlo progresivamente.`,


        'Licenciado en Desarrollo de Software': `Cuento con conocimientos en programación en múltiples lenguajes como Python y R. 
        
        Domino múltiples tecnologías para el desarrollo, mantenimiento y entrenamiento de modelos de Inteligncia Artificial, evaluación de cantidades masivas de datos (Data Science), desarrollo de aplicaciones  multiplataforma (con Flutter) y manejo de bases de datos. 
        
        También, me formé ampliamente para entender los fundamentos del desarrollo de software, desde el pensamiento matemático y probabilístico, hasta la electrónica y lógica computacional.  Esto me ha permitido tener una perspectiva disinta en mi consultorio.
        
        También, me permite tener una herramienta más para el diagnóstico y tratamiento efectivo de mis pacientes: la  tecnología, la cual uso constantemente.`,


        'Estudios en Neuropsicologia': `Completé el Diplomado en Neuropsicología en noviembre del 2020, como parte de mi búsqueda por comprender a profundidad los procesos cerebrales mediante los cuales las personas divergen en su forma de pensar e interactuar por procesos físicos pero también psicológicso. Esto me permite manejar un abanico más amplio de padecimientos, pero sobre todo, entender y tratar de forma integral todos los padecimientos, por entender desde su raíz la conducta humana.`,


        'Estudios en Terapia Cognitivo Conductual': `Completé el Diplomado Internacional en Terapia Cognitivo-Conductual en Febrero 2023 como parte de mi interés en tratar las enfermedades de mis pacientes desde su origen primero, ya sea este físico, mental o una combinación de ambas. He visto personalmente como el origen de padecimientos como la diabetes, las adicciones o casic cualquier enfermedad tienen un severo componente psicológico de fondo que hay que manejar para que la gente sienta la capacidad de curarse, de no regresar a su enfermedad y aprenda las técnicas para dominar el extraño sentimiento de estar sano.`,


        'Certificacion Azure AI': `Recibí mi certificación como Ingeniero de Inteligencia Artificial por parte de Microsoft en Junio 2024. 
        
        Esto avala mis estudios en las herramientas de la nube de Azure para el desarrollo, despliegue y mantenimiento de modelos de Inteligencia Artificial más avanzadas, incluyendo aquellas relacionadas con Visión de Máquina, Modelos de Lenguaje, Procesamiento de Audios, Documentos y con la Indexación de grandes cantidades de información contenidas en diferentes tipos de documentos.`,


        'Maestro Inteligencia Artificial': `Actualmente, estoy cursando una Maestría en Inteligencia Artificial, enfocándome en el desarrollo de sistemas inteligentes y el uso de tecnología avanzada para resolver problemas complejos. Esta maestría me está proporcionando conocimientos avanzados en machine learning, procesamiento de lenguaje natural y redes neuronales. Mi objetivo es integrar estos conocimientos en el ámbito médico para mejorar la precisión y eficiencia de los diagnósticos y tratamientos.`,


        'Health-GPT': `Desarrollé HealthGPT como un proyecto innovador que utiliza Inteligencia artificial para interrogar y clasificar de forma efectiva y sistemática a los pacientes en la sala de espera de Urgencias según su nivel de urgencia y gravedad. Así, consigo mejorar la atención médica ordenada y priorizada en todo tipo de hospitales. Mi equipo obtuvo el segundo lugar en el Hackatón de Impacto en Guanajuato, en el evento del Día de la Mentefactura 2023. Este proyecto sigue activo, ahora con el nombre de Triage IA y espero poder implementarlo en múltiples hospitales a lo largo del estado de Guanajuato y de México en cuanto esté listo.`,


        'Gestamor': `Desarrollé Gestamor, un proyecto ganador del 18° Concurso de Creatividad e Innovación como una forma de dar seguimiento al embarazo en estudiantes durante la pandemia de COVID 19. Gestamor es una plataforma estatal que utiliza tecnología para seguir y empoderar a las pacientes embarazadas durante su etapa estudiantil, proporcionando una atención personalizada y oportuna. La plataforma incluye herramientas para el seguimiento del embarazo, intervenciones médicas y educativas, y el mejoramiento de las condiciones económicas de las pacientes a través de información y otorgamiento de recursos, como becas y consejería personalizada para evitar complicaciones en su embarazo y prevenir la deserción escolar en ese periodo tan importante de sus vidas. Este proyecto demostró el impacto positivo de la tecnología en la salud maternal y me permitió combinar mis habilidades médicas y tecnológicas para crear una solución integral y efectiva.`,


        'Astrocyte': `El astrocito (astrocyte en inglés) es la célula que se mantiene más de cerca de la neurona. Le da soporte y la apoya en todos sus procesos. El proyecto Astrocyte es un Sistema Integral de Consulta Externa en Medicina. Busca ser un sistema de Expediente Clínico Electrónico que soporte y apoye a los médicos (las neuronas) en cada uno de los procesos que estos siguen, para optimizar la eficiencia, la fiabilidad y el trato humano de los médicos en la consulta externa. Esperamos crecer pronto para abarcar también procesos en otros ámbitos de la atención en salud, como en medicina intrahospitalaria, rehabilitación, etc. Todo esto potenciado por inteligencia artificial y servidores robustos que garanticen el adecuado tratamiento de datos sensibles y disponibilidad de la información que el médico necesita, cuando la necesita, para que éste solo se tenga que preocupar por dar una buena atención en consulta.`
    };

    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modalText.innerHTML = `<h3>${id.replace(/-/g, ' ')}</h3><p>${descriptions[id]}</p>`;
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
