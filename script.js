const adviceArray = [
    "Не бойся пробовать новое – лучший способ учиться.",
    "Ты сильнее, чем думаешь. Действуй!",
    "Маленькие шаги ведут к большим победам.",
    "Каждый день – это шанс стать лучше.",
    "Ошибки – это уроки, а не провалы. Учись на них.",
    "Лучшее время начать – прямо сейчас.",
    "Не сравнивай себя с другими. Сравнивай себя с собой вчерашним.",
    "Будущее строится твоими сегодняшними решениями.",
    "Терпение и труд всё перетрут.",
    "Не жди идеального момента – создай его сам.",
    "Если трудно – значит, ты растёшь.",
    "Самый большой риск – ничего не делать.",
    "Решения меняют судьбу. Прими правильное решение сегодня."
];

const button = document.getElementById('getAdviceBtn');
const adviceText = document.getElementById('advice');
const body = document.body;

const sound = new Audio('https://www.soundjay.com/button/beep-07.wav');  // Заменить на свой звук

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * adviceArray.length);
    adviceText.textContent = adviceArray[randomIndex];

    adviceText.classList.add("show");

    sound.play();

    body.style.animation = "backgroundChange 2s infinite";
});