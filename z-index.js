// ---------- Change z-index ---------- 

const circleblue = document.querySelector('.circleblue');
        
function toggleZIndex() {
    const currentZIndex = parseInt(circleblue.style.zIndex, 10);
    const newZIndex = currentZIndex === -1 ? 1 : -1;
    circleblue.style.zIndex = newZIndex;
}
        
setInterval(toggleZIndex, 3000);