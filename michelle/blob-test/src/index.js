import "./styles.css";
import Scene from "./Scene";
import imageUrls from "../assets/*.*";

const assets = Object.values(imageUrls).map((val) => {
  return Object.values(val)[0];
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const images = [
  ["_DSF3253", "_DSF3194"],
  ["morii-5", "morii-11"],
  ["000584360007 1", "000584360004 1"],
  ["morii-7", "morii-8"],
  ["morii-12", "morii-13"],
  ["morii-9", "morii-10"],
  ["stree_flower 1", "52342369905_3c2fb5f38b_o 1"],
  ["background-og", "morii-1"],
  ["000049", "morii-4"],
];

const randomSet = images[getRandomInt(images.length)];

const getAssetFromKey = (key) => {
  return assets.find((url) => url.includes(key));
};

document.querySelector(".tile__image").src = getAssetFromKey(randomSet[0]);
document.querySelector(".tile__image-overlay").src = getAssetFromKey(
  randomSet[1]
);

window.scene = new Scene();
