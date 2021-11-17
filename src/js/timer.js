const timer_btn = document.getElementById("timer-btn");
const timer = document.getElementById("timer");

let minutes = 0;
let seconds = 0;
let mSeconds = 0;
let interval = null;

function clickBtn(event){
    if (this.innerText === "Start"){
        this.innerText = "Stop";
        interval = setInterval(startTimer, 10);
    }else{
        this.innerText = "Start";
        clearInterval(interval);
        stopTimer();
    }
}

function startTimer(){
    if (mSeconds < 100){
        mSeconds = mSeconds + 1;
    }else{
        mSeconds = 0
        seconds = seconds + 1;
    }
    if (seconds == 60){
        seconds = 0;
        minutes = minutes + 1;
    }
    timer.innerText = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}:${String(mSeconds).padStart(2,"0")}`;

}

function stopTimer(){
    mSeconds = 0;
    seconds = 0;
    minutes = 0;
    timer.innerText = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}:${String(mSeconds).padStart(2,"0")}`;
}

timer_btn.addEventListener("click", clickBtn);