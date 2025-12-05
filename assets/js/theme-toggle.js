// Theme Toggle Functionality
(function () {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Get saved theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Apply saved theme on page load
    htmlElement.setAttribute('data-theme', savedTheme);

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Apply new theme
            htmlElement.setAttribute('data-theme', newTheme);

            // Save to localStorage
            localStorage.setItem('theme', newTheme);
        });
    }
})();
