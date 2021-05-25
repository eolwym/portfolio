window.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.skill-img')
    const tooltip = document.querySelector('.tooltip')
    const menuBurger = document.querySelector('#menu-burger')
    const navbar = document.querySelector('nav')

    imgs.forEach(img => {
        img.addEventListener('mousemove', (e) => {
            console.log(e);
            tooltip.style.display = 'block'

            tooltip.style.position = 'absolute'
            tooltip.style.top = e.pageY-10 + 'px'
            tooltip.style.left = e.pageX+10 + 'px'
            tooltip.innerHTML = e.target.alt
            tooltip.classList.add('chip')
            tooltip.classList.add('chip-'+e.target.alt)
            tooltip.style.zIndex = 1
        })
        img.addEventListener('mouseout', (e) => {
            console.log(e);
            tooltip.style.display = 'none'
            tooltip.classList.remove('chip')
            tooltip.classList.remove('chip-'+e.target.alt)
        })

    })

    menuBurger.addEventListener('click', (e) => {
        e.stopPropagation()
        const navbar = document.querySelector('nav') 
        if (navbar.className === 'navbar-close') {
            navbar.className = 'navbar-open';
        } else {
            navbar.className = 'navbar-close'
        }
    })

    window.addEventListener('click', () => {
        if (navbar.classList.contains('navbar-open')) {
            navbar.className = 'navbar-close'
        }
    })

    /* CONTACT FORM */

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const contactFormResult = document.querySelector('.contact-form-result')
            contactFormResult.innerHTML = 'Envoi en cours ...'
            emailjs.sendForm('service_mdu9vp7', 'template_nbx01sn', event.target, 'user_s83q0QpQVMcyirf6ueOnF')
                .then(function() {
                    contactFormResult.innerHTML = "Message envoyé !"
                }, function(error) {
                    if(error.text = "The g-recaptcha-response parameter not found") {
                        contactFormResult.innerHTML = "Captcha invalide !"
                    } else { 
                        contactFormResult.innerHTML = "Erreur !"
                    }

                });
        });
    }

})





