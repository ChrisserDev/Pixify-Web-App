import { imageSets } from "./data.js";
import { darkLightMode } from "./hamburger-menu.js";
import { hamburgerMenu } from "./hamburger-menu.js";

darkLightMode();
hamburgerMenu();

// DISPLAYING THE IMAGES

const displayCards=(dataSet)=> {
   const cardsContainer = document.getElementById("cards-container");
   const allCards = dataSet.map(item=> {
   return `<a class="cards" href="see-more.html?id=${item.id}">
             <img src=${item.images} alt=${item.name} class="cards-image" />
             <div class="cards-info">
                <p>${item.name}</p>
                <p class="item-title">${item.title}</p>
                </div>
                <span id="see-more-btn">see more</span>
           </a>`;
     })

    cardsContainer.innerHTML= allCards.join("");
 }
 
 
 window.onload = function() {
   displayCards(imageSets);
 };

// ADD NEW IMAGES USING THE FORM

const submitBtn = document.querySelector("#submit-btn3");
submitBtn.addEventListener("click", (e) => {
//PREVENT THE FORM'S DEFAULT FUNCTION
  e.preventDefault();

//GET THE VALUES FROM THE FORM
  let name = document.querySelector('input[name="name"]').value;
  let title = document.querySelector('input[name="title"]').value;
  let imageURL1 = document.querySelector('input[name="imageURL1"]').value;
  let imageURL2 = document.querySelector('input[name="imageURL2"]').value;
  let imageURL3 = document.querySelector('input[name="imageURL3"]').value;
  let imageURL4 = document.querySelector('input[name="imageURL4"]').value;
  let imageURL5 = document.querySelector('input[name="imageURL5"]').value;

// Create an array with the image URLs
  let imageUrlsArray = [imageURL1, imageURL2, imageURL3, imageURL4, imageURL5];
    
  // Convert the array to a string and save it to localStorage
  localStorage.setItem("imageUrlsArray", JSON.stringify(imageUrlsArray));

// CODE TO RETURN THE FIRST IMAGE THAT THE USER SUBMITTED WHICH APPEAR NEXT TO THE OTHER CARDS

    const newImage = document.createElement('div');
    newImage.innerHTML = 
      `<a class="cards" href="see-more.html?id=${imageURL1}&name=${name}&title=${title}">
      <img src=${imageURL1} alt= ${name} class="cards-image" />
      <div class="cards-info">
        <p id="detail-name">${name}</p>
        <p>${title}</p>
      </div>
        <span id="see-more-btn">see more</span>
      </div>`

    const cardContainer = document.querySelector("#cards-container");
    cardContainer.insertBefore(newImage, cardContainer.firstChild);

// RESET FORM INPUTS
    resetValue();
});

function resetValue(){
  document.querySelector('input[name="name"]').value="";
  document.querySelector('input[name="title"]').value="";
  document.querySelector('input[name="imageURL1"]').value="";
  document.querySelector('input[name="imageURL2"]').value="";
  document.querySelector('input[name="imageURL3"]').value="";
  document.querySelector('input[name="imageURL4"]').value="";
  document.querySelector('input[name="imageURL5"]').value="";
}