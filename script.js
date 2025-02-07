const messages = [
	"Выбари кнопачку позязя :3",
    "Ой, а папробуй ещё раз :3",
    "Ну нажми дя",
    "Ну позязяяяяя :(",
    "Я щяс загрущю :(",
    "Я щяс плякять начню",
    "Я уже плякать начиняю :(((",
    "пляк-пляк...",
    "пляк-пляк...",
    "пляк-пляк..."
];

let messageIndex = 0;
const noSound = new Audio(); // Звук для кнопки "Ні"
const yesSound = new Audio(); // Звук для кнопки "Так"

function handleNoClick() {

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {

    window.location.href = "yes_page.html";
}