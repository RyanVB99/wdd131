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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Oquirrh Mountain Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "2009, August, 21",
        area: 60000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-39513-main.jpg"
      },
      {
        templeName: "Hamilton New Zealand",
        location: "Hamilton, New Zealand",
        dedicated: "1958, April, 20",
        area: 45251,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744-main.jpg"
      },
      {
        templeName: "Boise Idaho",
        location: "Boise, Idaho, United States",
        dedicated: "1987, May, 25",
        area: 35868,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-41667-main.jpg"
      },
  ];

const templeTemplate = function(temple) {
    return `<div class="temple">
    <h3>${temple.templeName}</h3>
    <p>${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>Area: ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    </div>`;
}

const templeCards = temples.map(templeTemplate);
document.querySelector('#temples').innerHTML = templeCards.join('');

const oldTemple = temples.filter(temple => temple.dedicated < "1900");
const oldTempleCards = oldTemple.map(templeTemplate);

const newTemple = temples.filter(temple => temple.dedicated > "2000");
const newTempleCards = newTemple.map(templeTemplate);

const largeTemple = temples.filter(temple => temple.area > 90000);
const largeTempleCards = largeTemple.map(templeTemplate);

const smallTemple = temples.filter(temple => temple.area < 10000);
const smallTempleCards = smallTemple.map(templeTemplate);

const allTempleButton = document.querySelector('#home');
const oldTempleButton = document.querySelector('#old');
const newTempleButton = document.querySelector('#new');
const largeTempleButton = document.querySelector('#large');
const smallTempleButton = document.querySelector('#small');

allTempleButton.addEventListener('click', function() {
    document.querySelector('#temples').innerHTML = templeCards.join('');
}
);

oldTempleButton.addEventListener('click', function() {
    document.querySelector('#temples').innerHTML = oldTempleCards.join('');
}
);

newTempleButton.addEventListener('click', function() {
    document.querySelector('#temples').innerHTML = newTempleCards.join('');
}
);

largeTempleButton.addEventListener('click', function() {
    document.querySelector('#temples').innerHTML = largeTempleCards.join('');
}
);

smallTempleButton.addEventListener('click', function() {
    document.querySelector('#temples').innerHTML = smallTempleCards.join('');
}
);
