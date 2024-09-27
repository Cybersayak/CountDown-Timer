// const DaysE1 = document.getElementById("days");
// const HoursE1 = document.getElementById("hours")
// const MinutesE1 = document.getElementById("minutes");
// const SecondE1 = document.getElementById('seconds');



// const Pujo = '8 October 2024';

// function countdown() {
//   const PujoDate = new Date(Pujo);
//   const currentDate = new Date();

//   const totalSeconds = (PujoDate - currentDate) / 1000;


//   const days = Math.floor(totalSeconds / 3600 / 24);
//   const hours = Math.floor(totalSeconds / 3600) % 24;
//   const minutes = Math.floor(totalSeconds / 60) % 60;
//   const seconds = Math.floor(totalSeconds) % 60;

//   DaysE1.innerHTML = days;
//   HoursE1.innerHTML = formatTime(hours);
//   MinutesE1.innerHTML = formatTime(minutes);
//   SecondE1.innerHTML = formatTime(seconds);

// }
// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

// countdown();

// setInterval(countdown, 1000);


document.addEventListener("DOMContentLoaded", function() {
  const DaysE1 = document.getElementById("days");
  const HoursE1 = document.getElementById("hours");
  const MinutesE1 = document.getElementById("minutes");
  const SecondE1 = document.getElementById('seconds');

  const Pujo = '10 October 2024';

  function countdown() {
    const PujoDate = new Date(Pujo);
    const currentDate = new Date();

    const totalSeconds = (PujoDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    DaysE1.innerHTML = days;
    HoursE1.innerHTML = formateTime(hours);
    MinutesE1.innerHTML = formateTime(minutes);
    SecondE1.innerHTML = formateTime(seconds);
  }

  function formateTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  countdown();
  setInterval(countdown, 1000);
});
