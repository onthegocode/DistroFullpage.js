// FullPage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors:['section1', 'section2', 'section3', 'footer'],
    navigationTooltips: ['About Us', 'Our Goals', 'Get in Touch'],
})

// Copyright Update new year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


// Animation

    const getintouch = document.querySelector('#footer-cta');
    const submit = document.querySelector('#submit-btn');
    
