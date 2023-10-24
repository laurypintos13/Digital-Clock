function clock(){
    let dateTime = new Date();
    let hs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    const ampm = document.getElementById('ampm');

    if (hs >= 12){
        ampm.innerHTML = `PM`;
    }else{
        ampm.innerHTML = `AM`;
    }
    
    if(hs > 12){
        hs = hs - 12;
    }
    
   
    document.getElementById('hours').innerHTML = hs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;


    if(sec < 10){
        document.getElementById('seconds').innerHTML = `0${sec}`;
    }
    if(hs < 10){
        document.getElementById('hours').innerHTML = `0${hs}`;
    }
    if(min < 10){
        document.getElementById('minutes').innerHTML = `0${min}`;
    }


}
setInterval(clock, 10);