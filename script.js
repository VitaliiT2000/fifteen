const textElement = document.getElementById("text");
const messages = ["С начала","И так, наконец-то ты видишь этот сайт-открытку)","Провозился с этим гитхабом весь день суммарно","Но зато я научился им пользоваться)","И так, начнем", "Сейчас будет стих", "-->", "ахахах не будет", "я просто его не тут напишу", "Но скажу, что люблю тебя очень", "ТЫ самая лучшая девочка на свете!", 
    "тваи глазаа...", "самые лУчшИЕ на свееетее", "хочешь на котика посмотреть?", "*зеркало*", "я пока не умею картинки вставлять(", "но зато знаю, что ты котик😼", "Ну ладно", "хорошего тебе дня или вечера", "почему дня или вечера? ",
    "Потому что я надеюсь", "ты будешь смотреть это не только сейчас", "конечно же, пока я не сделаю лучше)✨","потом будешь другим моим творчеством любоваться👨🏻‍💻", "Я ТЕБЯ ЛЮБЛЮ! 💛💛💛", "💎 мой)","Атеперь все..."
];
let currentIndex = 0;

textElement.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % messages.length; 
    textElement.innerText = messages[currentIndex]; 
});
