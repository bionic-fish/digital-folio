//  mobile navigation overlay
const overlay = document.querySelector('.overlay-closed');

function closeMenu() {
    if (overlay.style.display == 'block') {
        overlay.className = 'overlay-closed'
        overlay.style.display = 'none';
    } else {
        overlay.className = 'overlay-closed'
        overlay.style.display = 'block';
    }
}

function toggleMenu() {
    overlay.style.display = 'none'
    if (overlay.style.display == 'none') {
        overlay.className ='overlay-open'
        overlay.style.display = 'block'
    } else {
        overlay.className = 'overlay-closed'
        overlay.style.display = 'none'
    }
}


