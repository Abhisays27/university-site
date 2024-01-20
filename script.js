
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
    var logomoob = document.getElementById('header-logo-mob');
    var hamburgerIcon = document.querySelector('.hamburger-icon i');
    
    var stickyOffset = navbar.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.scrollY > stickyOffset) {
            navbar.classList.add('sticky');
            logo.src = "./Assests/aditya.png";
            logomoob.src = "./Assests/aditya.png";
       
            hamburgerIcon.style.color = 'black'; 
        } else {
            navbar.classList.remove('sticky');
            logo.src = "./Assests/aditya.png";
            logomoob.src = "./Assests/aditya.png";
            hamburgerIcon.style.color = 'white'; 
        }
    });
});

//sliding window
$(document).ready(function () {
    $(".hamburger-icon").click(function () {
        $(".sliding-window").animate({ width: 'toggle', left: '0' }, 500);
    });

    $("#close-btn").click(function () {
        closeSlidingWindow();
    });
});

function closeSlidingWindow() {
    $(".sliding-window").animate({ width: 'toggle', left: '-100%' }, 500);
}



  // JavaScript to close the dropdown on click
  $(document).ready(function() {
    $('.nav-link-slide').on('click', function() {
      var targetId = $(this).data('target');
      
      // Toggle the content of the clicked accordion
      $('#' + targetId).slideToggle();
      
      // Close other accordions
      $('.accordion-content').not('#' + targetId).slideUp();
    });
  });
  