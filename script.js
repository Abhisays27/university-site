document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        link.addEventListener('mouseenter', () => {
            modal.style.display = 'flex';
        });

        link.addEventListener('mouseleave', () => {
            modal.style.display = 'none';
        });
    });
});
