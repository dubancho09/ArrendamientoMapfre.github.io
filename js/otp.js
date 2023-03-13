const btn__getInto = document.getElementById('btn__getInto');

btn__getInto.addEventListener('click', ()=>{
    startTime();
});

let minutes = 0;
let seconds = 0;

const loadSeconds = () =>{
    let text__seconds;

    if(seconds < 0){
        seconds = 59;
    }

    if(seconds < 10){
        text__seconds = `0${seconds}`;
    }else{
        text__seconds = seconds;
    }

    document.getElementById('second').innerHTML = text__seconds;

    seconds --;

    loadMinutes(seconds);
}

const loadMinutes = (seconds)=>{
    let text__minutes;

    if(seconds == -1 && minutes !==0){
        setTimeout(()=>{
            minutes --;
        },500);
    }else if(seconds == -1 && minutes == 0){
        setTimeout(()=>{
            minutes = 4;
        },500);
    }

    if(minutes < 10 ){
        text__minutes = `0${minutes}`;
    }else{
        text__minutes = minutes;
    }

    document.getElementById('minute').innerHTML = text__minutes;

}

const startTime = () =>{
    setInterval(loadSeconds,1000);
    loadSeconds();
}