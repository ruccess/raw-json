let timer;
let minutes = 25;
let seconds = 0;
let isPaused = false;

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    if (!isPaused) {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            timer = null;
            alert("Pomodoro session is over!");
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
        }
    }
}

function pauseTimer() {
    isPaused = !isPaused;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    minutes = 25;
    seconds = 0;
    isPaused = false;
    updateDisplay();
}

function updateDisplay() {
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// 초기 화면 업데이트
updateDisplay();
