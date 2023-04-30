function LodeTime(){
    const Date_And_Time = new Date();
    let hours = Date_And_Time.getHours();
    let Minute = Date_And_Time.getMinutes();
    let Seconds = Date_And_Time.getSeconds();

    let Format = "AM"
    let time = document.querySelector('.time');
    let format = document.querySelector('.format');


    if(hours>12){
        hours = hours-12;
        Format = "PM";
    }

    if(hours===00){
        hours = 12;
    }

    if(hours<10){
        hours = "0"+hours;
    }
    if(Minute<10){
        Minute = "0"+Minute;
    }
    if(Seconds<10){
        Seconds = "0"+ Seconds;
    }

    time.innerHTML = `${hours} : ${Minute} : ${Seconds}`;
    format.innerHTML = `${Format}`;
    setInterval(LodeTime, 1000);
}
LodeTime();