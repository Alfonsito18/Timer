let resetBtn = document.querySelector('#resetBtn');
let startStopBtn = document.querySelector('#startStopBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;


//variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for set interval & timerstatus
let timerInterval = null;
let timerStatus = "stopped";

//stop watch function
function stopwatch(){
    seconds++
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++

        if(minutes / 60 === 1){
            minutes = 0;
            hours++
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" +seconds.toString();
    }else{
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0" +minutes.toString();
    }else{
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" +hours.toString();
    }else{
        leadingHours = seconds;
    }



    let displayTimer = document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}
//window.setInterval(stopwatch,1000)


startStopBtn.addEventListener('click',function(){
    if(timerStatus == "stopped"){
        timerInterval = window.setInterval(stopwatch,1000);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-pause" id="pause"></i>`;
        pause.style.backgroundColor = "orange";
        pause.style.borderRadius = "5px";
        pause.style.fontSize = "2rem";
        pause.style.padding = "10px";
        pause.style.width = "50px";
        pause.style.color = "#fff";
        
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
        play.style.backgroundColor = "green";
        play.style.borderRadius = "5px";
        play.style.fontSize = "2rem";
        play.style.padding = "10px";
        play.style.width = "50px";
        play.style.color = "#fff";
    }
})

resetBtn.addEventListener('click',function(){

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
})