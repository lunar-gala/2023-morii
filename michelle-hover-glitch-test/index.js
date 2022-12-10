const imgArr = document.querySelectorAll(".img");
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
  const imgAnimation = img.style.animation;
  img.addEventListener("mouseover", () => {
    imgArr.forEach((img, idx) => {
      if (index !== idx) {
        img.style.filter = "grayscale(1)";
      }
      img.style.animationPlayState = "paused";
    });
    document.querySelector(".content").style.display = "block";
  });
  img.addEventListener("mouseout", () => {
    imgArr.forEach((img, idx) => {
      img.style.filter = "none";
      img.style.animationPlayState = "running";
    });
    document.querySelector(".content").style.display = "none";
  });
});
