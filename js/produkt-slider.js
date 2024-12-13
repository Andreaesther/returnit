//Bruger Javascript standard
"use strict";

//Henter alle elementer i index.html, der har en klasse der hedder .produkt-container
const produktContainers = document.querySelectorAll('.produkt-container');

//Henter knapperne med klasserne .nxt-btn og .pre.btn i index.html
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');


//Henter information om containerens bredde og placering
produktContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    /*containerWidth gemmer information om containerens bredde, der senere skal bruges til at flytte 
    containeren når der scrolles*/

    //Tilknytter en klik-event til nxtBtn og preBtn
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth; /*Når der klikkes på nxtBtn på hjemmesiden, er + 
        tegnet med til at øge scrollpositionen med bredden af containeren som blev hentet og gemt på linje 12-15.*/
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; /*Når der klikkes på preBtn på hjemmesiden, er - tegnet med til at 
        reducere scrollpositionen med bredden af containeren som blev hentet og gemt på linje 12-15.*/
    });
});


