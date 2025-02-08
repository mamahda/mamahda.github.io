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

function handleNoClick() {
  if(noAlready == true) {
    window.location.href = "yes_page.html";
  }
  else {
    noButton.textContent = "Okay";
    noAlready = true;
  }
}

function handleYesClick() {
  yesButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
  noButton.style.fontSize = `${currentSize * 1.5}px`;
}
