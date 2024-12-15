document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');

    console.log('Document is ready');

    menuButton.addEventListener('click', () => {
        console.log('Menu button clicked');
        navLinks.classList.toggle('active');
    });
});
