import { imageSets } from "./data.js";
import { darkLightMode } from "./hamburger-menu.js";
import { hamburgerMenu } from "./hamburger-menu.js";

darkLightMode();
hamburgerMenu();

  //FILTER THROUGH THE ARRAY

  let currentId;
  let currentImage;

  
  window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    currentId = urlParams.get("id");
    
    currentImage = imageSets.filter(item => item.id == currentId)[0];
    console.log(currentImage);
    displayImage(crntImage);
  }

  //PREVIOUS/NEXT BUTTONS FUNCTIONS

  const firstImage = 0;
  const lastImage = imageSets[0].images.length -1;
  let crntImage = 0;

function displayImage(imageIndex) {
  const image = `<div class="current-image">
  <div class="current-image-info">
     <h1>${currentImage.title}</h1>
     <h2 class="current-image-name">${currentImage.name}</h2>
     </div>
     <img src=${currentImage.images[imageIndex]} alt=${currentImage.name} class="current-new-image" />
     <p id="images-number">${imageIndex + 1} of 5</p>
     </div>`;
 
   const imageContainer = document.querySelector(".imageHolder");
   imageContainer.innerHTML = image;
}

  const nextBtn =  document.getElementById("next-btn");
  nextBtn.addEventListener("click", () => {
    crntImage++;
    if (crntImage  >= lastImage){
      crntImage = 4;
}
    displayImage(crntImage);
});

  const prevBtn = document.getElementById('prv-btn')
  prevBtn.addEventListener("click", () => {
    crntImage--;
    if (crntImage  <= firstImage){
      crntImage = 0;
}
  displayImage(crntImage);

});