function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const imgArr = document.querySelectorAll(".img");

const glitchRoot = "./assets/backgrounds";
const glitchImages = [
  "_DSF3194.jpg",
  "_DSF3253.jpg",
  "000049.jpeg",
  "000584360004 1.png",
  "000584360007 1.png",
  "52342369905_3c2fb5f38b_o 1.jpeg",
  "background-og.jpeg",
  "morii-1.jpeg",
  "morii-4.jpeg",
  "morii-5.jpeg",
  "morii-7.jpeg",
  "morii-8.jpeg",
  "morii-9.jpeg",
  "morii-10.jpeg",
  "morii-11.jpeg",
  "morii-12.jpg",
  "morii-13.jpg",
  "stree_flower 1.jpeg",
];
const glitchPaths = glitchImages.map((img) => `${glitchRoot}/${img}`);

let prevX = 0;
let prevY = 0;

let movexAmount = 0;
let moveyAmount = 0;

document.addEventListener("mousemove", (e) => {
  mousePos(e);
});

const mousePos = (e) => {
  movexAmount = e.pageX - prevX;
  moveyAmount = e.pageY - prevY;

  moveImg(movexAmount, moveyAmount);

  prevX = e.pageX;
  prevY = e.pageY;
};

const moveImg = (xAmount, yAmount) => {
  imgArr.forEach((img) => {
    let movementStrength = 5 + Math.random() * 15;
    img.style.left = img.offsetLeft - xAmount / movementStrength + "px";
    img.style.top = img.offsetTop - yAmount / movementStrength + "px";
  });
};

imgArr.forEach((img, index) => {
  const imgSrc = img.src;
  img.addEventListener("mouseover", () => {
    const randomImg = glitchPaths[getRandomInt(glitchPaths.length)];
    imgArr.forEach((img, idx) => {
      if (index !== idx) {
        img.style.filter = "grayscale(1)";
      }
      img.style.animationPlayState = "paused";
    });
    document.querySelector(".content").style.display = "block";
    document.querySelector(
      ".glitchit"
    ).style.backgroundImage = `url(${randomImg})`;
    document.querySelectorAll(".glitchit").forEach((img, index) => {
      if (index !== 0) {
        img.style.backgroundImage = `url(${imgSrc})`;
      }
    });
  });
  img.addEventListener("mouseout", () => {
    imgArr.forEach((img, idx) => {
      img.style.filter = "none";
      img.style.animationPlayState = "running";
    });
    document.querySelector(".content").style.display = "none";
  });
});
