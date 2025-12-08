/* CLOCK */
function displayTime() {
  const dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();

  min = min < 10 ? "0" + min : min;

  document.getElementById('hours').textContent = hrs;
  document.getElementById('minutes').textContent = min;
}

setInterval(displayTime, 1000);
displayTime();

/* PAGE SWITCHING */
const pageMain = document.getElementById("pageMain");
const pageDash = document.getElementById("pageDash");

document.getElementById("toDashboard").onclick = () => {
  pageMain.classList.remove("active");
  pageDash.classList.add("active");
};

document.getElementById("fromDashboard").onclick = () => {
  pageDash.classList.remove("active");
  pageMain.classList.add("active");
};
