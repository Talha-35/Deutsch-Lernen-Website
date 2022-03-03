import {validateEmail} from "./Validators.js";

const button = document.querySelector("#buttonLogin");

button.addEventListener("click", (e) => {
    e.preventDefault()
    mainLoginValidate()
})




function mainLoginValidate() {
    
    function emailValidate() {
        const email = document.querySelector("#email").value;
        const errorEmail = document.getElementById("errorEmail");
        if (email === "") {
            errorEmail.innerText = "Darf nicht leer sein"
        }   else{
            const isValidEmail = validateEmail(email) !== null

            if (!isValidEmail) {
                errorEmail.innerText = "E-Mail ist nicht valide"
            }    else {
                errorEmail.innerText = ""
            }
        }
    }
    function passwortValidate() {
        const passwort = document.getElementById("passwort").value;
        const errorPasswort = document.getElementById("errorPasswort");
        const numbers = /[0-9]/g;
        const passwortMix =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

        /*if (passwort.match(passwortMix)) {
            errorPasswort.innerText = ""
        }    else{
            errorPasswort.innerHTML =  "E-Mail ist nicht valide"
        }
    
    */
    
    if (passwort === "") {
        errorPasswort.innerText = "Darf nicht leer sein"
    }   else if (passwort.length <= 7) {
        errorPasswort.innerText = "Muss mindestens acht Zeichen lang sein"
    } else if (!passwort.match(numbers)) {
        errorPasswort.innerText = "Muss eine Zahl enthalten. "
    }  else if (!("ABCDEFGHIJKLMNIOPQRSTUVXYZ".split("").includes(passwort[0]))) {
        errorPasswort.innerText = "Muss mit einem Großbuchstaben beginnen"
    } else{
        errorPasswort.innerText =  ""
    }
}
    emailValidate()
    passwortValidate()
  
}



