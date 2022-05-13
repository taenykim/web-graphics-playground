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

var logEl = document.querySelector(".battery-log") as HTMLElement;

var battery = {
  charged: "%200",
  cycles: 120,
  안녕: "안녕",
};

//parseInt

anime({
  targets: battery,
  charged: 300,
  cycles: 130,
  round: 1,
  easing: "linear",
  update: function () {
    logEl.innerHTML = JSON.stringify(battery.charged);
  },
});
