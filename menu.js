

document.getElementById('ham_menu').addEventListener('click', function(){
    const navLinks = document.querySelector('.nav-links');

    if (navLinks.style.display === 'flex') {
        // document.body.style.backgroundColor = 'red';
        navLinks.style.display = 'none';
    } else {
        // document.body.style.backgroundColor = 'red';
        navLinks.style.display = 'flex';
    }
});

window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 1000) {
        navLinks.style.display = '';
    }
});