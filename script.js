// // -------------------dark mode -----------------------
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//   dayNight.querySelector("i").classList.toggle("fa-sun");
//   dayNight.querySelector("i").classList.toggle("fa-moon");
//   document.body.classList.toggle("dark");

//   if (document.body.classList.contains("dark")) {
//     icon.style.color = "white"; // White color for moon in dark mode
//   } else {
//     icon.style.color = "white"; // White color for sun in light mode
//   }
// });

// window.addEventListener("load", () => {
//   const icon = dayNight.querySelector("i");
//   if (document.body.classList.contains("dark")) {
//     icon.classList.add("fa-sun");
//     icon.style.color = "white"; // White color for moon when dark mode is on
//   } else {
//     icon.classList.add("fa-moon");
//     icon.style.color = "white"; // White color for sun when light mode is on
//   }
// });
const dayNight = document.querySelector(".day-night");
const icon = dayNight.querySelector("i");

dayNight.addEventListener("click", () => {
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.style.color = "white"; // White sun icon in dark mode
  } else {
    icon.style.color = "black"; // Black moon icon in light mode
  }
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    icon.classList.add("fa-sun");
    icon.style.color = "white"; // Sun icon starts as white in dark mode
  } else {
    icon.classList.add("fa-moon");
    icon.style.color = "black"; // Moon icon starts as black in light mode
  }
});
/*------Function--------*/
function navigateToCalculator() {
  window.location.href = "https://laxman-telange.github.io/Javascript/";
}
