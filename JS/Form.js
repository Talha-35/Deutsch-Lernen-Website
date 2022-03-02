import {validateEmail, validatePhone} from "./Validators.js";

const button = document.querySelector("#buttonForm");

button.addEventListener("click", (e) => {
    e.preventDefault()
    mainValidate()
})