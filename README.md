# Pixify Web App

## Quick Overview:

This code represents a website for a photography contest platform called Pixify. Users can explore submissions, read about Pixify, and submit their own work through a form. The website incorporates styling, dynamic content loading, and user interaction features.

## HTML STRUCTURE:

  ### HTML File (index.html):
  
  #### Header Section:
  
  Navigation Bar: Contains the Pixify logo, menu icon, and navigation links.
  
  Toggle Button: Allows users to switch between dark and light modes.
  
  ### Main Section (home-page):
  
  Image and Paragraph: Displays an image of a photographer holding a camera along with a paragraph inviting users to join the photography contest.

  ### HTML File (see-more.html)
  
  #### Header Section:

  Navigation Bar: Similar to index.html, containing Pixify logo, menu icon, and navigation links.

  Toggle Button: Allows users to switch between dark and light modes.

  #### Main Section:
  Image Holder: A div to hold the displayed images.
  
  Slider Buttons: "Previous" and "Next" buttons for navigating through images.
    
  ### HTML File (submission-page.html)
  
  #### Header Section:
  
  Navigation Bar: Similar to other pages.
  Toggle Button: Similar to other pages.

  #### Main Section (main-container):

  Submissions Section: Displays a heading "2023 SUBMISSIONS." An empty div with the id "cards-container" to dynamically add submission cards.

  Form Section: Allows users to submit their work. Input fields for name, title, and five image URLs. A submit button is also added to the form.

## CSS Styling:

  ### Global Reset and Font Styles:
  
  The * selector is used to reset margin, padding, and box-sizing for all elements, ensuring a consistent baseline. Specific font styles using font-family are applied to h1, h2, h3, p, and a elements.

  ### Body Styling:
  
  body is styled to have a smooth transition effect on background and text color changes over 1 second. It also hides horizontal overflow.

  ### Hamburger Menu Styling:
  
  Initially, the hamburger menu icon (#menu-icon) is set to display: none, likely for use in responsive design.

  ### Dark/Light Mode Switch Styling:
  
  The toggle button (toggle-btn) for dark/light mode has a flex layout, specific background color, and a circular shape. An icon inside the button is styled (toggle-btn img).
  
  The dark mode is implemented with the .dark-theme class, changing background color and text color.

  ### Header Styling:

  The header (header) has a flex layout with space-between justification and a specific background color. The Pixify logo (#logo-text) is styled with white color, font size, and line height. Buttons on the right side (right-header-btns) are styled with a flex layout.

  ### Home Page Styling:

  The home page (home-page) contains an image and a paragraph container. The paragraph container (paragraph-container) has a position set to absolute, a specific background color, border radius, padding, and width. Paragraph text inside it is styled for font size, line   height, and color.
  
  ### Submissions Page Styling:
  
  The main container (main-container) for the submissions page is styled with a flex layout and space-between justification. Submissions section (submissions) and the form container (form-container) are styled accordingly.
  
  Cards container (cards-container) is displayed as a grid with specific column settings. Form input elements inside input-container are styled with border-radius and width.

  The submit button (#submit-btn3) has styling for border, background, color, font size, and padding.
  
  ### Media Queries for Responsive Design:
  Media queries are used for different screen sizes, adjusting styles accordingly.

  ### Specific Page Styling:
  
  Styles for current-image, current-image-name, sliderImages, and more are defined for specific sections or pages. Styles are organized based on the sections or functionalities of the website, making it easy to maintain and understand.

## Javascript explained:

 ### Data.js

 The data used is an array named imageSets containing multiple objects, each representing a set of images associated with a particular photographer. Each object has the following properties:

  id: A unique identifier for the image set.
 
  name: The name of the photographer.

  title: The title or theme associated with the set of images.

  images: An array containing URLs of individual images in the set.

### Script.js 

  #### Displaying Images:

  The displayCards function dynamically generates HTML for each card based on the dataSet and inserts it into the "cards-container" element. The window.onload event triggers the display of cards using the imageSets data.   Uses imageSets as the initial dataSet.

  ![displaycards](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/30c43742-28d1-4fe0-8ccb-0662e71b924b)
 
   #### Form Submission:
 
  The code prevents the default form submission, retrieves values from form inputs, creates an array of image URLs, saves it to localStorage, creates a new card HTML for the first submitted image, inserts it at the beginning, and resets the form inputs.

  This code sets up a webpage to display cards with images, allows users to submit new images through a form, and dynamically updates the display with the submitted images.

  ![form submit logic](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/20e70604-6403-477a-8995-3d092b580b40)

  ![resetValues](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/4451ea05-b010-4195-92b6-a1382ab03036)

 ### See-more.js
 
  #### Importing Modules

  This section imports necessary modules and data. It imports imageSets from the data.js file and functions related to the hamburger menu from hamburger-menu.js. Here, functions for dark/light mode and hamburger menu are called.

  ![import modules (see-more)](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/512a7a28-e4ab-4ad5-95bc-0218574d8e86)
 
  #### Initializing Variables
 
   Variables for the current image ID, name, and title are declared. imageArrayfromLocalStorage is initialized with the array stored in the local storage or an empty array if it doesn't exist. currentIndex is set to 0 initially.

   ![initializingvariables(see-more)](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/bf0b0c48-4725-4fe0-9a10-56a1f666ddab)
 
  #### Window Load Event
  
  When the window loads, it retrieves parameters from the URL (assuming it's passed in the URL). It finds the initial index of the current image in imageArrayfromLocalStorage and checks if the currentId exists in imageSets. If it does, it calls displayImageSet,    
  otherwise it calls displayImage.

  ![windowOnload(see-more)](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/d3c5032c-259a-463f-a857-dc8c2f7ffed8)
 
  #### Next Button Click Event

  This section handles the click event for the next button. It increments currentIndex and checks if it's beyond the length of images in either imageArrayfromLocalStorage or imageSets. If it is, it resets the index to 0 and then calls the appropriate display function.

  ![nextfunction](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/12d84afe-0eb1-4405-9e2d-1bb4697492ea)
 
  #### Previous Button Click Event

  This section handles the click event for the previous button. It decrements currentIndex and checks if it's below 0. If it is, it resets the index to the last image in either imageArrayfromLocalStorage or imageSets and then calls the appropriate display function.

  ![prevFunction](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/b736ba51-a7b5-40a8-b77f-beeae25f4c38)

  #### Display Image Function
  
  This function displays the image using the URL from imageArrayfromLocalStorage. It creates an HTML structure and sets it in the element with the class "imageHolder".

  ![DisplayLocalStorageImages](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/f1ce46be-f649-4162-8bf6-608ac607feaf)
 
  #### Display ImageSet Function

  This function displays the image using the URL from imageSets. It creates an HTML structure and sets it in the element with the class "imageHolder".

  ![displayimageset](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/c7277eda-afba-4bb7-bc15-68d5ad9e0707)
 
 ### Dark/Light Mode:
 
  Purpose: This function is designed to toggle between dark and light modes when a button with the ID "btn" is clicked.

  Elements: It selects three elements with the IDs "btn," "btnText," and "btnIcon."

  Toggle Class: It toggles the "dark-theme" class on the document.body element, which is likely used to apply specific styles for dark mode.

  Button Text and Icon: Depending on the presence of the "dark-theme" class, it changes the text and source of the button's text and icon to indicate whether it's currently in light or dark mode.

  ![darkLightMode](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/7d264dfc-13fb-4692-b504-7c13db01034f)
 
  ### Hamburger Menu:

  Purpose: This function is responsible for toggling a mobile menu when a menu icon with the ID "menu-icon" is clicked.

  Elements: It selects an element with the ID "menu-icon."

  Toggle Class: When the "menu-icon" is clicked, it toggles the "mobile-menu" class on the element with the class "right-header-btns." This class likely controls the appearance or behavior of the mobile menu.

  Event Handling: It assigns the openMenu function to the onclick event of the "menu-icon," meaning the menu will open or close when the icon is clicked.

  ![hamburgermenufunction](https://github.com/ChrisserDev/Pixify-Web-App/assets/126911205/40d46fa9-927e-48f1-8bc8-7ea48be4d130)
