const toggleButton = document.querySelector("#toggle-button");
const toggleNavbar = document.querySelector("#navbar-toggle");
toggleButton.addEventListener("click", toggleFunction);

function toggleFunction() {
    toggleNavbar.style.display = "block"
}