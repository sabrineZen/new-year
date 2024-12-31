setTimeout(() => {
  const balle3_1 = document.querySelector(".balllon3");
  balle3_1.style.transform = "translateY(320px)";
  balle3_1.style.visibility = "visible";
}, 10000);
setTimeout(() => {
  const balle3_2 = document.querySelector(".balllon3");
  balle3_2.style.transform = "translateY(-400px)";
  balle3_2.style.visibility = "visible";
}, 15000);
setTimeout(() => {
  const Balle3_3 = document.querySelector(".balllon3");
  Balle3_3.style.transform = "translateY(320px)";
  Balle3_3.style.visibility = "visible";
}, 16728);
setTimeout(() => {
  const chiffre4 = document.getElementById("chif4");
  chiffre4.style.transform = "translateY(-550px)";
}, 15000);

setTimeout(() => {
  const Chiffre4 = document.getElementById("chif4");
  Chiffre4.style.transform = "translateY(3px)";
}, 17000);

setTimeout(() => {
  const BALLE3_4 = document.querySelector(".balllon3");
  BALLE3_4.style.transform = "translateY(-320px)";
  BALLE3_4.style.visibility = "visible";
}, 20500);

setTimeout(() => {
  const nYear = document.querySelector(".NewYear");
  nYear.style.transform = "translateY(-400px)";
  nYear.style.visibility = "visible";
}, 10000);

setTimeout(() => {
  const chiffr4 = document.getElementById("chif4");
  chiffr4.textContent = "5";
}, 17000);

setTimeout(() => {
  const bal = document.querySelector(".balllon");
  bal.style.animation = "none";
}, 3000);
setTimeout(() => {
  const balle = document.querySelector(".balllon");
  balle.style.transform = " translate(-50%, -800px)";
}, 3500);

setTimeout(() => {
  const bal1 = document.querySelector(".balllon1");
  bal1.style.animation = "none";
}, 5000);
setTimeout(() => {
  const balle1 = document.querySelector(".balllon1");
  balle1.style.transform = " translateY( -800px)";
}, 6000);

setTimeout(() => {
  const bal2 = document.querySelector(".balllon2");
  bal2.style.animation = "none";
}, 7000);
setTimeout(() => {
  const balle2 = document.querySelector(".balllon2");
  balle2.style.transform = " translateY( -800px)";
}, 8000);

setTimeout(() => {
  const contenue = document.querySelector(".container");
  contenue.style.visibility = "visible";
  contenue.style.transform = "translateY(-100px)";
}, 9000);

setInterval(() => {
  function randomemoji() {
    const emoji = ["🎉", "🎊", "🌟", "🥳", "🎇"];

    return emoji[Math.floor(Math.random() * emoji.length)];
  }

  function div() {
    let division = document.querySelector(".division");

    let e = document.createElement("div");
    e.classList.add("drop");

    e.innerText = randomemoji();

    let left = Math.floor(Math.random() * window.innerWidth);
    let size = Math.random() * 1.5;
    let duration = Math.random() * 4 + 1;

    e.style.left = left + "px";
    e.style.fontSize = 0.5 + size + "em";
    e.style.animationDuration = duration + "s";
    e.style.transform = `rotate(${Math.random() * 360}deg)`;

    division.appendChild(e);

    setTimeout(function () {
      division.removeChild(e);
    }, 2000);
  }

  setInterval(function () {
    div();
  }, 50);
}, 8000);

