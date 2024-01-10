import { imageSets } from "./data.js";
import { darkLightMode } from "./hamburger-menu.js";
import { hamburgerMenu } from "./hamburger-menu.js";

darkLightMode();
hamburgerMenu();

// DISPLAYING THE IMAGES

const displayCards=(dataSet)=> {
   const cardsContainer = document.getElementById("cards-container");
   const allCards = dataSet.map(item=> {
   return `<a class="cards" href="see more.html?id=${item.id}">
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

    const name = document.querySelector('input[name="name"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const imageURL1 = document.querySelector('input[name="imageURL1"]').value;

// CODE TO RETURN THE NEW IMAGES THAT THE USER SUBMITTED

    const newImage = document.createElement('div');

    newImage.innerHTML = 
      `<img src=${imageURL1} alt= ${name} class="cards-image" />
      <div class="cards-info">
        <p>${name}</p>
        <p>${title}</p>
      </div>
        <span id="see-more-btn">see more</span>
      </div>`

    const cardContainer = document.querySelector("#cards-container");
    cardContainer.insertBefore(newImage, cardContainer.firstChild);

// RESET FORM INPUTS
    
    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="title"]').value = "";
    document.querySelector('input[name="imageURL1"]').value = "";
  
});