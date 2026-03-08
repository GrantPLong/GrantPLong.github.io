window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var links = document.querySelectorAll('#navbar a');
    var name = document.querySelector('.nav-name');
    var topbutton = document.getElementById('topbutton');

    if (window.scrollY > 10) {
        navbar.style.backgroundColor = 'rgb(27, 27, 27)';
        links.forEach(function(link) { link.style.color = 'white'; });
        name.style.color = 'white';
    } else {
        navbar.style.backgroundColor = 'transparent';
        links.forEach(function(link) { link.style.color = 'black'; });
        name.style.color = 'black';
    }

    if (window.scrollY > 300) {
        topbutton.style.display = 'block';
    } else {
        topbutton.style.display = 'none';
    }
});

document.getElementById('topbutton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});