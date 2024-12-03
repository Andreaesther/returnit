"use strict";

/*Scroll to top button*/
/*Når du scroller udløses window.onscroll som kalder på funktionen scrollFunction*/ 
window.onscroll = function() {
    scrollFunction();
};

/*Funktionen der bliver kaldt når der scrolles*/
function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn"); /*Henter elementet med #scrollBtn*/
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { /*Hvis man scroller mere end 20px vises knappen */
        scrollBtn.style.display = "block"; /*Hvis ovenstående sandt = viser knappen*/
    } else {
        scrollBtn.style.display = "none"; /*Hvis ovenstående falsk = skjuler knappen*/
    }
}

/*Funktion kaldes når der klikkes */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}