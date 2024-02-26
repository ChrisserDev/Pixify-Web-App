//Importing Modules

import { imageSets } from "./data.js";
import { darkLightMode, hamburgerMenu } from "./hamburger-menu.js";

//Calling the dark mode function and the humburger menu.
darkLightMode();
hamburgerMenu();


//Initializing Variables
let currentId;
let currentName;
let currentTitle;

let imageArrayfromLocalStorage = JSON.parse(localStorage.getItem("imageUrlsArray")) || [];
let currentIndex = 0;

//Window Load Event
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  currentId = urlParams.get("id");
  currentName = urlParams.get("name");
  currentTitle = urlParams.get("title");

  // These two lines ensure that currentIndex is set to the index of the currentId in the array, or if it's not found (currentIndex is -1), it defaults to 0 representing the first image in the array.
  currentIndex = imageArrayfromLocalStorage.indexOf(currentId);
  currentIndex = currentIndex !== -1 ? currentIndex : 0;

  // Check if the currentId exists in imageSets
  const imageSetIndex = imageSets.findIndex(item => item.id == currentId);

  // Display the initially provided image URL or from imageSets
  if (imageSetIndex !== -1) {
    displayImageSet(imageSetIndex, currentIndex);
  } else {
    displayImage(currentIndex);
  }
}

//Next Button Click Event
const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
  currentIndex++;
  const imageSetIndex = imageSets.findIndex(item => item.id == currentId);

  if (imageSetIndex !== -1) {
    if (currentIndex >= imageSets[imageSetIndex].images.length) {
      currentIndex = 0;
    }
    displayImageSet(imageSetIndex, currentIndex);
  } else {
    if (currentIndex >= imageArrayfromLocalStorage.length) {
      currentIndex = 0;
    }
    displayImage(currentIndex);
  }
});

// Previous Button Click Event
const prevBtn = document.getElementById('prv-btn')
prevBtn.addEventListener("click", () => {
  currentIndex--;
  const imageSetIndex = imageSets.findIndex(item => item.id == currentId);

  if (imageSetIndex !== -1) {
    if (currentIndex < 0) {
      currentIndex = imageSets[imageSetIndex].images.length - 1;
    }
    displayImageSet(imageSetIndex, currentIndex);
  } else {
    if (currentIndex < 0) {
      currentIndex = imageArrayfromLocalStorage.length - 1;
    }
    displayImage(currentIndex);
  }
});

//Display Image Function based on the results from imageArrayfromLocalStorage array.
function displayImage(index) {
  const imageUrl = imageArrayfromLocalStorage[index];

  const image2 = `<div class="current-image">
    <div class="current-image-info">
      <h1>${currentTitle}</h1>
      <h2 class="current-image-name">${currentName}</h2>
      <img src="${imageUrl}">
      <p id="images-number">${index + 1} of ${imageArrayfromLocalStorage.length}</p>
    </div>
  </div>`;

  const imageContainer = document.querySelector(".imageHolder");
  imageContainer.innerHTML = image2;
}

//Display Image Function based on the results from data.js array.
function displayImageSet(imageSetIndex, index) {
  const currentImageSet = imageSets[imageSetIndex];

  const imageSet2 = `<div class="current-image">
    <div class="current-image-info">
      <h1>${currentImageSet.title}</h1>
      <h2 class="current-image-name">${currentImageSet.name}</h2>
      <img src="${currentImageSet.images[index]}">
      <p id="images-number">${index + 1} of ${currentImageSet.images.length}</p>
    </div>
  </div>`;

  const imageContainer = document.querySelector(".imageHolder");
  imageContainer.innerHTML = imageSet2;
}