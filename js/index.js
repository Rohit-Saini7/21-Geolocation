const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");
const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const accuracy = document.querySelector("#accuracy");
const time = document.querySelector("#time");

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes;
}

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    latitude.textContent = data.coords.latitude;
    longitude.textContent = data.coords.longitude;
    accuracy.textContent = data.coords.accuracy;
    time.textContent = msToTime(data.timestamp);

    arrow.style.transform = `rotate(${data.coords.heading + 45} deg)`;
  },
  (err) => {
    console.error(err);
  }
);
