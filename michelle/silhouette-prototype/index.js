const $silhouette = document.getElementById("silhouette");
let timer;
document.addEventListener("mousemove", magicMouse);

function mouseStopped() {
  $silhouette.classList.add("fading");
}

function magicMouse() {
  $silhouette.classList.remove("fading");

  clearTimeout(timer);
  timer = setTimeout(mouseStopped, 300);
}
