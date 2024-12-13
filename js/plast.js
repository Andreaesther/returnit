"use strict";

// Henter elementet med ID'en tekstContainer
const tekstContainer = document.getElementById('tekstContainer');

// Initialiserer variabler til at gemme JSON-data og tællere
let jsonData = [];
let currentIndex = 0;
let charIndex = 0;

// Funktion til at vise tekst med skriveeffekt
function typeEffect(text) {
    if (charIndex < text.length) {
        tekstContainer.textContent += text[charIndex]; // Tilføjer næste tegn
        charIndex++;                                    // Går til næste tegn
        setTimeout(() => typeEffect(text), 100);        // Kalder sig selv med en forsinkelse
    } else {
        // Når hele teksten er skrevet, vent lidt, og vis næste beskrivelse
        setTimeout(showNextDescription, 2000); // 2 sekunders pause før næste beskrivelse
    }
}

 // Funktion til at vise næste beskrivelse
function showNextDescription() {
    if (currentIndex < jsonData.length) {
        tekstContainer.textContent = ''; // Ryd tekstContainer for at starte forfra
        charIndex = 0; // Nulstil tegnindekset
        typeEffect(jsonData[currentIndex].description); // Start skriveeffekt for nuværende tekst
        currentIndex++; // Gå til næste beskrivelse
    } else {
        currentIndex = 0; // Gå tilbage til starten, hvis alle beskrivelser er vist
        setTimeout(showNextDescription, 2000); // Start forfra efter en pause
    }
}

// Henter data fra JSON-filen plast.json
fetch('json/plast.json')
    .then(response => response.json())
    .then(data => {
        jsonData = data; // Gemmer JSON-data i en variabel
        showNextDescription(); // Starter med at vise den første beskrivelse
    })
    .catch(error => console.error('Error:', error));
