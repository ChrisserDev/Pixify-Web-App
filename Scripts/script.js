const imageSets = [
   {
     id:1,  
     name: 'Andrew Smith',
     title: 'Innocence',
     images: [
       'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
       'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
       'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
       'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
       'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
     ],
   },
   {
     id:2,
     name: 'Jane Doe',
     title: 'Nature Adventures',
     images: [
       'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
       'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
       'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
       'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
       'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
     ],
   },
   {
     id:3,
     name: 'Irna Tawsen',
     title: 'Faces of the World',
     images: [
       'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
       'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
       'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
       'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
       'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
     ],
   },
   {
     id:4,
     name: 'Mark Dale',
     title: 'Wild Animals',
     images: [
       'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
       'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
       'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
       'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
       'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
     ]
   }

 ];


//DARK/LIGHT MODE

let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

btn.onclick = function(){
  document.body.classList.toggle("dark-theme");

  if(document.body.classList.contains("dark-theme")){
    btnIcon.src = "/assets/sun.png";
    btnText.innerHTML = "Light";
  } else{
    btnIcon.src = "/assets/moon.png";
    btnText.innerHTML = "Dark";
  }

}

// DISPLAYING THE IMAGES

const displayCards=(list)=>{
  const cardsContainer = document.getElementById("cards-container");
   const allCards = list.map(item=>{
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


//HAMBURGER-MENU

  const menuIcon = document.querySelector("#menu-icon");
  const openMenu = () => {
  const btnContainer = document.querySelector(".right-header-btns");
  btnContainer.classList.toggle("mobile-menu");
}

menuIcon.onclick = openMenu;


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
    newImage.innerHTML = `<img src=${imageURL1} alt= ${name} class="cards-image" />
    <div class="cards-info">
      <p>${name}</p>
      <p>${title}</p>
    </div>
      <span id="see-more-btn">see more</span>
    </div>`

    console.log(newImage);

    const cardContainer = document.querySelector("#cards-container");
    cardContainer.insertBefore(newImage, cardContainer.firstChild);

// RESET FORM INPUTS
    
    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="title"]').value = "";
    document.querySelector('input[name="imageURL1"]').value = "";
    
   
});




