"use strict";

/*Henter fra index */
const chatInput = document.querySelector(".chat-input textarea"); //inputfelt
const sendChatBtn = document.querySelector(".chat-input span"); //Send-knap
const chatbox = document.querySelector(".chatbox"); //Chatbeskeder
const chatbotToggler = document.querySelector(".chatbot-toggler"); //Knap
const chatbotAside = document.querySelector("aside");


let userMessage;

//Funktion der opretter en ny chatbesked
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className); //tilføjer klasse
    
    //skelner mellem bruger og chatbot
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

//Håndterer når brugeren sender en besked
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return; //stopper hvis input er tomt

    //Tilføjer brugerens besked til chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = ""; //Tømmer tekstfelt når der trykket send

    //Simulerer chatbot svar
    setTimeout(() => {
        //Skriver "Tænker" besked når man venter på respons
        chatbox.appendChild(createChatLi("Tænker...", "incoming"));
    }, 600);
}

//Eventlistener for at klik på send-knap
sendChatBtn.addEventListener("click", handleChat);

//Klik på åbne lukke ikon
chatbotToggler.addEventListener("click", () => chatbotAside.classList.toggle("show-chatbot"));
