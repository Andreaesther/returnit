"use strict";

//Henter elementet med ID'en tekst-container 
document.getElementById('tekstContainer');

//Henter data fra JSON-filen plast.json
fetch('json/plast.json')
    .then(response => response.json())
    .then(data => {
        
        //gennemgår hver description i JSON-dataene
        data.forEach(plast => { 
            const newElement = document.createElement('p'); //opretter et nyt p-tag
            newElement.textContent = `${plast.description}`; //indholdet i p-tagget bliver hentet fra JSON-filen
            tekstContainer.appendChild(newElement); //opretter p-tagget som et barn af section med Id'en tekstContainer i HTML
          
        });


    })