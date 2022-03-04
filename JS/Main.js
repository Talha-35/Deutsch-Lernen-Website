// ❌❌ Toggle Menu ❌❌ 


const toggleButtonOpen = document.querySelector("#toggle-button-open");
const toggleButtonClose = document.querySelector("#toggle-button-close");
const toggleNavbar = document.querySelector("#navbar-toggle");
const menuCizgi = document.querySelector("#menu-cizgi");
const menuCarpi = document.querySelector("#menu-carpi");
toggleButtonOpen.addEventListener("click", toggleOpen);
toggleButtonClose.addEventListener("click", toggleClose);

function toggleOpen() {
    toggleNavbar.style.display = "block"
    menuCizgi.style.display = "none"
    menuCarpi.style.display = "block"
}
function toggleClose() {
    toggleNavbar.style.display = "none"
    menuCizgi.style.display = "block"
    menuCarpi.style.display = "none"
}

// ❌❌ „back-to-top“ Button ❌❌ 


const buttonTop = document.querySelector("#buttonTop");

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 1000 ) {
        buttonTop.classList.add("buttonActive");
    } else {
        buttonTop.classList.remove("buttonActive");
        
    }
})


// ❌❌ hier bewegt sich das Logo automatisch ❌❌ 

function mainAutoAnime() {
    const animeDiv = document.querySelector("#animeContainerAuto").scrollWidth - 50
    let image = document.querySelector("#imageAnimeAuto");
    let schalter = 0;
    
    setInterval(secondAnime, 10);
    
    
    function secondAnime() {
        
        if (schalter == animeDiv) {
            schalter = 0;
        }
        schalter++
        image.style.right = schalter + "px";
    }
}

mainAutoAnime()



// ❌❌ hier bewegt sich das Logo Manual ❌❌ 

function manualAnimeMitTastatur() {
    let image = document.querySelector("#imageAnimeManuel");
    let x = 0;
    
    window.onkeydown = function (event) {
        switch (event.keyCode) {
            //left
            case 37:    
            x -= 2;
            image.style.left = x + "px"; 
            break;
            
            //right
            case 39:                
            case 37:    
            x += 2;
            image.style.left = x + "px";            
            break;
            
        }
    }
    
    
}

manualAnimeMitTastatur()


function manualAnimeMitButtons() {
    let image = document.querySelector("#imageAnimeManuel");
    let leftButton = document.querySelector("#imageAnimeButtonLeft");
    let rightButton = document.querySelector("#imageAnimeButtonRight");
    
    
    let x = 0;

    leftButton.addEventListener("click", moveLeft)
    rightButton.addEventListener("click", moveRight)
    
    function moveLeft() {
        x -= 10;
        image.style.left = x + "px"; 
    }
    function moveRight() {
        x += 10;
        image.style.left = x + "px"; 
    }
    
}

manualAnimeMitButtons()


// ❌❌ images ❌❌ 

const bigImageDiv = document.querySelector("#full-img-box");
const bigImage = document.querySelector("#full-img");

function openImage(img) {
    bigImageDiv.style.display = "flex";
    bigImage.src = img;
}
function closeImage() {
    bigImageDiv.style.display = "none";
    
}