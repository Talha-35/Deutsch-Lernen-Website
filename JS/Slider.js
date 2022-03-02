let slider = document.querySelectorAll(".slider");
let imageNummerText = document.querySelectorAll(".imageNummerText");
let circle = document.getElementsByClassName("circle");

var sliderNum = 0;


setSlider(sliderNum);


function setSlider(num) {
    sliderNum = num;
    
    if (num >= slider.length) {
        sliderNum = 0;
    } else if (num < 0){
        sliderNum = slider.length - 1        
    }

    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none"        
    }
    slider[sliderNum].style.display = "block";
    
    
    for (let i = 0; i < slider.length; i++) {
        imageNummerText[i].innerText = `${sliderNum + 1} / ${slider.length}`
    }
    for (let i = 0; i < circle.length; i++) {
        circle[i].className = circle[i].className.replace(" active", "");
      }
    
      circle[sliderNum].className += " active";
    
}

function prev() {
    sliderNum--;
    setSlider(sliderNum)
    clearInterval(time);
}

function next() {
    sliderNum++;
    setSlider(sliderNum)    
    clearInterval(time);
}

function currentSlide(num) {
    setSlider((sliderNum = num));
  }

const time = setInterval(function() {
    sliderNum++;
    setSlider(sliderNum)
}, 5000);


// for keyboard arrows

document.onkeydown = checkKey;


function checkKey(e) {
  if (e.keyCode == "37") { // sol ok tusu
    prev();
  } else if (e.keyCode == "39") { // sag ok tusu
    next();
  }
}   