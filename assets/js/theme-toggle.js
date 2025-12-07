// Theme Toggle Functionality 
(function () {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Load saved theme or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Apply theme on page load
    htmlElement.setAttribute('data-theme', savedTheme);

    // Toggle theme on click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Optional: Notify other JS parts
            document.dispatchEvent(new CustomEvent("themeChanged", { detail: newTheme }));
        });
    }
})();
