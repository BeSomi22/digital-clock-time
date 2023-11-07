const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const months = document.querySelector('.months');
const days = document.querySelector('.days');
const years = document.querySelector('.years');

function  setTime(){
  const now = new Date();
  const mm = now.getMonth();
  const dd = now.getDate();
  const yyyy = now.getFullYear();
  const hrs = now.getHours();
  const min = now.getMinutes();
  const sec =now.getSeconds();
  const monthsNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  if( hrs > 12){
    hours.innerHTML = hrs -12;
  }else{
    hours.innerHTML =hrs;
  }

  seconds.innerHTML =  String(sec)
    .padStart(2, '0');
  minutes.innerHTML = String(min)
    .padStart(2, '0');
  months.innerHTML = monthsNames[mm];
  days.innerHTML = dd;
  years.innerHTML = yyyy;
 
}

setInterval(setTime, 1000);