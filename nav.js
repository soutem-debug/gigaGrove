const navBar = document.querySelector('.nav-bar');

const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = navBar.getAttribute('data-visible')
    
    if (visibility === 'false') {
    navBar.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);

    } else if (visibility === 'true') {
            navBar.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }

    });