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

anime({
  targets: ["polygon", "feTurbulence", "feDisplacementMap"],
  points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
  baseFrequency: 0,
  scale: 1,
  loop: true,
  direction: "alternate",
  easing: "easeInOutExpo",
});

const roundLogEl = document.querySelector(".round-log");

anime({
  targets: roundLogEl,
  innerHTML: [0, 3000],
  easing: "linear",
  duration: 3000,
  round: 1, // Will round the animated value to 1 decimal
});

anime({
  targets: ".specific-prop-params-demo",
  translateX: {
    value: 250,
    duration: 800,
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: "easeInOutSine",
  },
  scale: {
    value: 2,
    duration: 1600,
    delay: 1000,
    easing: "easeInOutQuart",
  },
  delay: 3000, // All properties except 'scale' inherit 250ms delay
});

anime({
  targets: ".function-based-params-demo .el",
  translateX: 270,
  direction: "alternate",
  loop: true,
  delay: function (el, i, l) {
    return i * 100;
  },
  endDelay: function (el, i, l) {
    return (l - i) * 100;
  },
});

const relativeEl = document.querySelector(".el.relative-values") as HTMLElement;
relativeEl.style.transform = "translateX(100px)";

anime({
  targets: ".el.relative-values",
  translateX: {
    value: "*=2.5", // 100px * 2.5 = '250px'
    duration: 1000,
  },
  width: {
    value: "-=20px", // 28 - 20 = '8px'
    duration: 1800,
    easing: "easeInOutSine",
  },
  rotate: {
    value: "+=2turn", // 0 + 2 = '2turn'
    duration: 1800,
    easing: "easeInOutSine",
  },
  direction: "alternate",
});

anime({
  targets: ".function-based-values-demo .el",
  translateX: (el: HTMLElement) => {
    return el.getAttribute("data-x");
  },
  translateY: (el: HTMLElement, i: number) => {
    return 50 + -50 * i;
  },
  scale: (el: HTMLElement, i: number, l: number) => {
    return l - i + 0.25;
  },
  rotate: () => {
    return anime.random(-360, 360);
  },
  borderRadius: () => {
    return ["50%", anime.random(10, 35) + "%"];
  },
  duration: () => {
    return anime.random(1200, 1800);
  },
  delay: () => {
    return anime.random(0, 400);
  },
  direction: "alternate",
  loop: true,
});

anime({
  targets: ".property-keyframes-demo .el",
  translateX: [
    { value: 250, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 },
  ],
  translateY: [
    { value: -40, duration: 500 },
    { value: 40, duration: 500, delay: 1000 },
    { value: 0, duration: 500, delay: 1000 },
  ],
  scaleX: [
    { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
    { value: 1, duration: 900 },
    { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
    { value: 1, duration: 900 },
  ],
  scaleY: [
    { value: [1.75, 1], duration: 500 },
    { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
    { value: 1, duration: 450 },
    { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
    { value: 1, duration: 450 },
  ],
  easing: "easeOutElastic(1, .8)",
  loop: true,
});

anime({
  targets: ".staggering-easing-demo .el",
  translateX: 270,
  delay: anime.stagger(1000, { easing: "easeOutQuad" }),
});

anime({
  targets: ".staggering-grid-demo .el",
  scale: [
    { value: 2, easing: "easeInOutQuad", duration: 200 },
    { value: 1, easing: "easeInOutQuad", duration: 300 },
  ],
  delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
});

anime({
  targets: ".staggering-axis-grid-demo .el",
  translateX: anime.stagger(10, { grid: [14, 5], from: "first", axis: "x" }),
  translateY: anime.stagger(10, { grid: [14, 5], from: "first", axis: "y" }),
  rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: "first", axis: "x" }),
  delay: anime.stagger(100, { grid: [14, 5], from: "first" }),
  easing: "easeInOutQuad",
  duration: 700,
});

const t1 = anime.timeline({
  easing: "easeOutExpo",
});

t1.add(
  {
    targets: ".el.ddong",
    translateX: 30,
  },
  500
);
t1.add(
  {
    targets: ".el.ddong2",
    translateX: 30,
  },
  500
);
t1.add(
  {
    targets: ".el.ddong3",
    translateX: 30,
  },
  "+=1000"
);

var animation = anime({
  targets: ".seek-anim-demo .el",
  translateX: 270,
  delay: function (el, i) {
    return i * 100;
  },
  elasticity: 200,
  easing: "easeInOutSine",
});

const seekProgressEl = document.querySelector(
  ".seek-anim-demo .progress"
) as HTMLInputElement;

seekProgressEl.oninput = () => {
  animation.seek(animation.duration * (Number(seekProgressEl.value) / 100));
};

var updates = 0;
var progressLogEl = document.querySelector(
  `.update-demo .progress-log`
) as HTMLInputElement;
var updateLogEl = document.querySelector(
  `.update-demo .update-log`
) as HTMLInputElement;

anime({
  targets: ".update-demo .el",
  translateX: 270,
  delay: 1000,
  direction: "alternate",
  loop: 3,
  easing: "easeInOutCirc",
  update: function (anim) {
    updates++;
    progressLogEl.value = "progress : " + Math.round(anim.progress) + "%";
    updateLogEl.value = "updates : " + updates;
  },
});
