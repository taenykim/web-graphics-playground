import anime from "animejs";

let state = 0;

const button = document.querySelector(".button");
button?.addEventListener("click", () => {
  if (state === 0) {
    anime({
      targets: ".el",
      translateX: 500,
    });
  } else if (state === 1) {
    anime({
      targets: ".el",
      translateX: 0,
    });
  }
  state = (state + 1) % 2;
  console.log(state);
});
