const hamburgerMenu = document.querySelector('#menu');

hamburgerMenu.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('show');
    hamburgerMenu.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
    var lastModified = document.lastModified;
    console.log("Last Modified Date and Time: " + lastModified);
    document.getElementById("lastModified").innerHTML = "<br>Last Modified: " + lastModified;
});