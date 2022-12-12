
let circle = document.getElementsByClassName("progressaIndicator")[0];

let minutes = 24;
let seconds = 59;
let interval =null;

let progressStartValue=0;
let progressEndValue=100;

circle.style.background="#f4ff53"
function timerrun(){
    console.log(circle);
    
    timerProgress=setInterval(()=>{
        progressStartValue++;
        circle.style.background=`conic-gradient(#fff ${progressStartValue * 3.6}deg, #f4ff53 0deg)`;

           if (progressStartValue == progressEndValue) {
           
               clearInterval(timerProgress);
           }
           
    },9300);

}
   

function play() {
  interval = setInterval(()=> {
       displayTime(minutes, seconds);
      let btn1 =document.getElementById("button1").disabled = true;
       console.log(btn1);
      
     if (seconds == 0 && seconds !== -1 && minutes !== -1){
            seconds = 59;
            minutes--;       
        }

        seconds--;

        if (minutes == 0 && seconds == 0) {  
            pause();
            alert("Time's up! Take a break!");
            clearInterval(timerProgress); 
            reset()      
        }
        
       
    }, 1000);
}

function pause(){

    clearInterval(interval);
    let btn1 =document.getElementById("button1").disabled = false;
}

function reset() {
    pause();

    minutes = 25;
    seconds = 0;
    displayTime(minutes=25, seconds='00');
    clearInterval(timerProgress);
    circle.style.background="#f4ff53"
    progressStartValue=0;
    
}

function displayTime(minutes, seconds) {
    document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
}



