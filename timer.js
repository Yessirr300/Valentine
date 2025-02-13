document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");

    function updateTimer() {
        const startDate = new Date("2024-07-18T00:00:00"); // Дата начала
        const now = new Date();
        const diff = Math.floor((now - startDate) / 1000); // Разница в секундах

        timerElement.textContent = diff.toLocaleString("ru-RU") + " секунд";
    }

    updateTimer();
    setInterval(updateTimer, 1000);
});