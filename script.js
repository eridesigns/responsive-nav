//Grab the three line nav image
    //add the showNav event listener
    //set wasClicked to false, since it has not been clicked yet
var navButton = document.getElementById("responsive-button");
navButton.addEventListener("click", showNav);
navButton.wasClicked = false;

//Store the ul in a variable
var menuStyle = document.querySelector("nav ul");

//Set window resize to toggle function
window.onresize = toggle;

//Toggle function
    //When the width of the screen is more than 751 - the media breakpoint - remove the responsive-style class
    //This will force the responsive nav to always start from it's orginal state
function toggle() {
    if (window.innerWidth < 751) {
        menuStyle.removeAttribute("class", "responsive-style");       
    }
}

//Show nav function
    //If the nav button is clicked, add the responsive-style class
    //If the button is clicked again, remove the class
function showNav() {
    
    if (this.wasClicked == false) {
        menuStyle.setAttribute("class", "responsive-style");
        this.wasClicked = true;
    } else if (this.wasClicked == true) {
        menuStyle.removeAttribute("class", "responsive-style");
        this.wasClicked = false;
    } 
}