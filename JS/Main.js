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
