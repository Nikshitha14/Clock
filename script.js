let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

function DisplayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2; // Hour hand
    let mRotation = 6 * mm;           // Minute hand
    let sRotation = 6 * ss;         // Second hand
    console.log(hRotation);

    hour.style.transform = `rotate(${hRotation}deg)`;
  
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}


DisplayTime();
setInterval(DisplayTime, 1000);
