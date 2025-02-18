// Select elements
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const overlay = document.querySelector('.overlay');

// Add event listeners to dropdown toggles
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const dropdown = toggle.closest('.dropdown');
        dropdown.classList.toggle('active');

        // Toggle overlay and body scroll
        if (dropdown.classList.contains('active')) {
            overlay.style.display = 'block';
            document.body.classList.add('dropdown-active');
        } else {
            overlay.style.display = 'none';
            document.body.classList.remove('dropdown-active');
        }
    });
});

// Close dropdown when clicking outside
overlay.addEventListener('click', () => {
    dropdownToggles.forEach(toggle => {
        const dropdown = toggle.closest('.dropdown');
        dropdown.classList.remove('active');
    });
    overlay.style.display = 'none';
    document.body.classList.remove('dropdown-active');
});