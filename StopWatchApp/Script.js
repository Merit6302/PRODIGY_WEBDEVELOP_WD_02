
console.log
function start() {
    console.log('Start button clicked');
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(update, 10);
        running = true;
    }
}

function pause() {
    console.log('Pause button clicked');
    if (running) {
        clearInterval(timerInterval);
        difference = new Date().getTime() - startTime;
        running = false;
    }
}

function reset() {
    console.log('Reset button clicked');
    clearInterval(timerInterval);
    startTime = 0;
    updatedTime = 0;
    difference = 0;
    running = false;
    display.textContent = "00:00:00";
    laps.innerHTML = '';
    lapCounter = 0;
}

function recordLap() {
    console.log('Lap button clicked');
    if (running) {
        const lapTime = formatTime(updatedTime);
        lapCounter++;
        const lapElement = document.createElement('div');
        lapElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
        laps.appendChild(lapElement);
    }
}
