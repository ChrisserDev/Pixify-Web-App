// import { imageSets } from "./data.js";
// import { darkLightMode } from "./hamburger-menu.js";
// import { hamburgerMenu } from "./hamburger-menu.js";

// darkLightMode();
// hamburgerMenu();

//   //FILTER THROUGH THE ARRAY

//   let currentId;
//   let currentImage;
//   let currentImageNew;
//   let currentName;
//   let currentTitle;
//   let currentImageIndex;


//   window.onload = function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     currentId = urlParams.get("id");
//     currentName = urlParams.get("name");
//     currentTitle = urlParams.get("title");

//     const currentSet = imageSets.find(item => item.id == currentId);
//     currentImageIndex = currentSet.images.indexOf(currentSet.images.find(img => img.id == currentId));
  

//     // currentImage = imageSets.filter(item => item.id == currentId)[0];
//     // displayImage(crntImage);
//     displayImage2(currentSet, currentImageIndex);

//   }

//   //PREVIOUS/NEXT BUTTONS FUNCTIONS

//   const firstImage = 0;
//   const lastImage = imageSets[0].images.length -1;
//   let crntImage = 0;

//   function displayImage2(imageSet, imageIndex) {
//     const image2 = `<div class="current-image">
//       <div class="current-image-info">
//           <h1>${currentTitle}</h1>
//           <h2 class="current-image-name">${currentName}</h2>
//           <img src="${imageSet.images[imageIndex].src}">
//           </div>
//           </div>`;

//     const imageContainer = document.querySelector(".imageHolder");
//     imageContainer.innerHTML = image2;

// }

// // function displayImage(imageIndex) {
// //   const image = `<div class="current-image">
// //   <div class="current-image-info">
// //      <h1>${currentImage.title}</h1>
// //      <h2 class="current-image-name">${currentImage.name}</h2>
// //      </div>
// //      <img src=${currentImage.images[imageIndex]} alt=${currentImage.name} class="current-new-image" />
// //      <p id="images-number">${imageIndex + 1} of 5</p>
// //      </div>`;
 
// //    const imageContainer = document.querySelector(".imageHolder");
// //    imageContainer.innerHTML = image;
// // }

//   const nextBtn =  document.getElementById("next-btn");
//   nextBtn.addEventListener("click", () => {
//     crntImage++;
//     if (crntImage  >= lastImage){
//       crntImage = 4;
// }
//     // displayImage(crntImage);
//     displayImage2(currentImageNew);
// });

//   const prevBtn = document.getElementById('prv-btn')
//   prevBtn.addEventListener("click", () => {
//     crntImage--;
//     if (crntImage  <= firstImage){
//       crntImage = 0;
// }
//   // displayImage(crntImage);
//   displayImage2(currentImageNew);
// });

import { darkLightMode } from "./hamburger-menu.js";
import { hamburgerMenu } from "./hamburger-menu.js";

darkLightMode();
hamburgerMenu();

let currentId;
let currentName;
let currentTitle;
let currentImageURL2;

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  currentId = urlParams.get("id");
  currentName = urlParams.get("name");
  currentTitle = urlParams.get("title");

  currentImageURL2 = localStorage.getItem("imageURL2");

  displayImage(currentId);
}

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById('prv-btn');
nextBtn.addEventListener("click", () => {
  // Assume currentId is a single string, not an array
  // If it's an array, you might need to handle it differently
  displayImage(currentImageURL2);
});

prevBtn.addEventListener("click", () => {
  // Assume currentId is a single string, not an array
  // If it's an array, you might need to handle it differently
  displayImage(currentId);
});

function displayImage(imageUrl) {
  const image2 = `<div class="current-image">
    <div class="current-image-info">
      <h1>${currentTitle}</h1>
      <h2 class="current-image-name">${currentName}</h2>
      <img src="${imageUrl}">
    </div>
  </div>`;

  const imageContainer = document.querySelector(".imageHolder");
  imageContainer.innerHTML = image2;
}