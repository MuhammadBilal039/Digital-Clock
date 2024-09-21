const time = document.getElementById("time");

setInterval(function () {
  let date = new Date();
  time.innerHTML = date.toLocaleString();
}, 1000);
