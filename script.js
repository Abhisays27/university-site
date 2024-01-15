
//Navlink Hover Modals
document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentModal = null;
    let timeout;

    function showAndHideModal(newModal) {
        clearTimeout(timeout);

        if (currentModal) {
            currentModal.style.display = 'none';
        }

        newModal.style.display = 'flex';
        currentModal = newModal;
    }

    navLinks.forEach((link, index) => {
        const modal = modals[index];

        link.addEventListener('mouseenter', () => {
            timeout = setTimeout(() => {
                showAndHideModal(modal);
            }, 300);
        });

        link.addEventListener('mouseleave', () => {
            clearTimeout(timeout);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
        });

        modal.addEventListener('mouseleave', () => {
            modal.style.display = 'none';
        });
    });
});


//Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar-header');
    var logo = document.getElementById('header-logo');
    var stickyOffset = navbar.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.scrollY > stickyOffset) {
            navbar.classList.add('sticky');
            logo.src = "./Assests/srm-logo.svg.svg";
        } else {
            navbar.classList.remove('sticky');
            logo.src = "./Assests/srm-logo-white.svg (1).svg";
        }
    });
});

