//Typing effect
function typingEffect() {
    const texts = ["Hi, I'm Nicole.", "Hola, soy Nicole.", "Labas, esu Nicole."];
    let count = 0;
    let index = 0;
    let currentText = '';
    const typeText = document.querySelector('.typing');
    const typeElement = document.querySelector('.typing-text');
    const colourClass = ['my-name-text', 'developer-text', 'ramen-text'];

    (function type() {
        if (count === texts.length) {
            count = 0;
        }

        // add text color
        //remove previous colour class if one was added before
        //add appropriate colour class
        typeText.classList.remove(colourClass[count === 0 ? colourClass.length - 1 : count - 1]);
        typeText.classList.add(colourClass[count]);

        currentText = texts[count];

        letter = currentText.slice(0, ++index);

        let typeDelay = 150;
        typeText.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            typeDelay = 1800;
        };
        setTimeout(type, typeDelay);
    })();
};


// Nav bar underline sections animation
function navAnimation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    console.log(navLinks);
    sections.forEach(section => {
        section.addEventListener("mouseenter", function () {
            const id = this.getAttribute("id");
            const navActive = document.querySelector(`a[href="#${id}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            navActive.classList.add('active');

        });
    });
};


//smooth scrolling effect
function scrollEffect() {
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}

// Using Intersection Observer for Navbar test
function observeSectionForNav() {
    const sections = document.querySelectorAll('section');
    const options = {
        // root: null, //this is the viewport
        threshold: 0.4
        // rootMargin: "-150px"
    };

    const navObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            const idName = entry.target.id;
            const activeAnchor = document.querySelector(`[data-page=${idName}]`);
            if (!entry.isIntersecting) {
                activeAnchor.classList.remove('active');
            } else {
                activeAnchor.classList.add('active');
            }

        });
    }, options);

    sections.forEach(section => {
        navObserver.observe(section);
        console.log(section);
    })
}


// adding responsive burger for mobile sizes
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    });
}

//main function
function main() {
    scrollEffect();
    navSlide();
    typingEffect();
    // navAnimation();
    observeSectionForNav();
};

main();