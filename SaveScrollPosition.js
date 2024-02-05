// ----------------- Save Scroll Position -----------------

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the scroll position from localStorage
    var savedScrollPosition = localStorage.getItem('scrollPosition');

    // Set the scroll position if it exists
    if (savedScrollPosition) {
        window.scrollTo(0, savedScrollPosition);
    }

    // Save the scroll position when the user scrolls
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        localStorage.setItem('scrollPosition', scrollPosition);
    });
});