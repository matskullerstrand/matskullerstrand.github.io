// ---------- Show/hide mouse scroll ---------- 

document.addEventListener("DOMContentLoaded", function () {
    var mouseElement = document.querySelector('.mouse');
    var mouseCircleElement = document.querySelector('.mousecircle');

    function handleScroll() {

        var scrollPosition = window.scrollY;

        if (scrollPosition === 0) {
            mouseElement.style.opacity = 1;
            mouseCircleElement.style.opacity = 1;
            mouseElement.classList.remove('hidden');
            mouseCircleElement.classList.remove('hidden');
            mouseCircleElement.classList.remove('stopped');
        } else {
            mouseElement.style.opacity = 0;
            mouseCircleElement.style.opacity = 0;
            mouseElement.classList.add('hidden');
            mouseCircleElement.classList.add('hidden');
            mouseCircleElement.classList.add('stopped');
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});