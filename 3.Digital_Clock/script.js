const clock=document.getElementById('clock')

function updateTime(){
    const now= new Date()

    let hour=now.getHours()
    let min=now.getMinutes()
    let sec=now.getSeconds()

    // format
    hour=hour<10?"0"+hour:hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;


    clock.innerHTML=`${hour}:${min}:${sec}`  
}

setInterval(updateTime,1000)

updateTime()