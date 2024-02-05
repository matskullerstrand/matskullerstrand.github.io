// ---------- Navigation Circles ---------- 
function handleScroll() {
    var scrollPosition = window.scrollY;
    var documentHeight = document.documentElement.scrollHeight;
    
    // Percentages for when each circle should be 100% opacity
    var circleSettings = [
        { circleId: 1, scrollPercentage: 0.1 },
        { circleId: 2, scrollPercentage: 0.25 },
        { circleId: 3, scrollPercentage: 0.4 },
        { circleId: 4, scrollPercentage: 0.55 },
        { circleId: 5, scrollPercentage: 0.7 }
    ];

    // Find the last circle with a scroll percentage less than or equal to the current scroll percentage
    var activeCircle = circleSettings.reverse().find(function (circle) {
        return scrollPosition >= circle.scrollPercentage * documentHeight;
    });

    // Fade in all circles when scrolled to 0.1 of document height
    var fadeInThreshold = 0.1 * documentHeight;

    document.querySelectorAll('.navcircle').forEach(function(circle) {
        if (scrollPosition >= fadeInThreshold) {
            var isActive = activeCircle && circle.dataset.circleId == activeCircle.circleId;
            var opacity = isActive ? 1 : 0.25;
            circle.style.opacity = opacity;
        } else {
            circle.style.opacity = 0;
        }
    });
}

window.addEventListener('scroll', handleScroll);