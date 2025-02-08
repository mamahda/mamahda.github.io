const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let noAlready = false;
const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('.yes-button');
const textTitle = document.querySelector('.text-title');
const img = document.querySelector('.bg');

function handleNoClick() {
  if(noAlready == true) {
    window.location.href = "yes_page.html";
  }
  else {
    img.src = "https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif?cid=ecf05e47evv6gvf2qaacnn1ibygcukaqezqbvyk82u3lgtvp&ep=v1_gifs_related&rid=giphy.gif&ct=g";
    yesButton.style.display = "none";
    noButton.style.fontSize = '1.5em';
    noButton.textContent = "Okay";
    textTitle.textContent = "Harus mau dong pookie 😢";
    noAlready = true;
  }
}

function handleYesClick() {
  yesButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
  noButton.style.fontSize = `${currentSize * 1.5}px`;
}
