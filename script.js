document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.querySelector(".yes");
    const noBtn = document.querySelector(".no");
    const answerYes = document.querySelector(".answer--yes");

    let yesSize = 1; // Начальный размер кнопки "Yup"
    let noClickCount = 0; // Количество нажатий на "Nope"

    noBtn.addEventListener("click", function () {
        noClickCount++; // Увеличиваем счётчик нажатий

        // Увеличиваем кнопку "Yup"
        yesSize += 0.15;
        yesBtn.style.transform = `scale(${yesSize})`;
        yesBtn.style.fontSize = `${20 * yesSize}px`;

        // Если "Nope" нажали 10 раз
        if (noClickCount >= 9) {
            noBtn.style.display = "none"; // Прячем кнопку "Nope"
            
            // Делаем "Yup" на весь экран
            yesBtn.style.position = "fixed";
            yesBtn.style.top = "0";
            yesBtn.style.left = "0";
            yesBtn.style.width = "100vw";
            yesBtn.style.height = "100vh";
            yesBtn.style.transform = "none"; // Сбрасываем увеличение
            yesBtn.style.fontSize = "50px"; // Увеличиваем текст
            yesBtn.style.display = "flex";
            yesBtn.style.alignItems = "center";
            yesBtn.style.justifyContent = "center";
            yesBtn.textContent = "ДА! 💖"; // Меняем текст
        }
    });

    yesBtn.addEventListener("click", function () {
        // Через 1 секунду переход на страницу с таймером
        setTimeout(() => {
            window.location.href = "love.html";
        }, 1000);
    });
});