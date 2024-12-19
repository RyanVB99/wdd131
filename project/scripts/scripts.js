const toggleMenu = function () {
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
};

const toggleTheme = function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Switch to Light Theme';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Switch to Light Theme';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = 'Switch to Dark Theme';
            localStorage.setItem('theme', 'light');
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    toggleTheme();
});

