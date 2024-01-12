//DARK/LIGHT MODE

export function darkLightMode(){
    const btn = document.getElementById("btn");
    const btnText = document.getElementById("btnText");
    const btnIcon = document.getElementById("btnIcon");
    
    btn.onclick = function(){
      document.body.classList.toggle("dark-theme");
    
      if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "/assets/sun.png";
        btnText.innerHTML = "Light";
      } else{
        btnIcon.src = "/assets/moon.png";
        btnText.innerHTML = "Dark";
      }
    };
};

//HAMBURGER-MENU

export function hamburgerMenu(){
const menuIcon = document.querySelector("#menu-icon");

const openMenu = () => {
  const btnContainer = document.querySelector(".right-header-btns");
  btnContainer.classList.toggle("mobile-menu");
}   
  menuIcon.onclick = openMenu;
};

