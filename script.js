document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start');
    const pauseButton = document.getElementById('pause');
    const resetButton = document.getElementById('reset');
    let timer;
    let timeInSeconds = 25 * 60;
    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        document.title = display;
        timerDisplay.textContent = display;
    }
    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            timeInSeconds--;
            if (timeInSeconds < 0) {
                clearInterval(timer);
                alert('Time is up!');
                return;
            }
            displayTimeLeft(timeInSeconds);
        }, 1000);
    }
    function pauseTimer() {
        clearInterval(timer);
    }
    function resetTimer() {
        clearInterval(timer);
        timeInSeconds = 25 * 60;
        displayTimeLeft(timeInSeconds);
    }
    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
    displayTimeLeft(timeInSeconds);
});
