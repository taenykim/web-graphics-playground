import anime from "animejs";

let state = 0;
let rotate = 0;

const button = document.querySelector(".button");
button?.addEventListener("click", () => {
  rotate++;
  if (state === 0) {
    anime({
      targets: ".el",
      translateX: 200,
      borderRadius: ["0%", "25%"],
      backgroundColor: ["#ff0000", "#00ff00"],
      rotate: `${rotate}turn`,
    });
  } else if (state === 1) {
    anime({
      targets: ".el",
      translateX: 0,
      borderRadius: ["25%", "0%"],
      backgroundColor: ["#0000ff", "#ffff00"],
      rotate: `${rotate}turn`,
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
  안녕: 300,
  easing: "linear",
  update: function () {
    logEl.innerHTML = JSON.stringify(battery);
  },
});
