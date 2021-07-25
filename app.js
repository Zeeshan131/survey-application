const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    // Will be used for animation of the links
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle nav
            nav.classList.toggle('nav-active');
    
            // Animate links
            navLinks.forEach ((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                }
            });
    
            // Burger animation
            burger.classList.toggle('toggle');
        })
    }
};

navSlide();



// JS for login and signup page

const loginButton = document.querySelector('.loginBtn');
const signUpButton = document.querySelector('.signUpBtn');
const formBackground = document.querySelector('.formBg');
const body = document.querySelector('body');

signUpButton.onclick = function() {
    formBackground.classList.add('active');
    body.classList.add('active');
}

loginButton.onclick = function() {
    formBackground.classList.remove('active');
    body.classList.remove('active');
}