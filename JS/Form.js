import {validateEmail, validatePhone} from "./Validators.js";

const button = document.querySelector("#buttonForm");

button.addEventListener("click", (e) => {
    e.preventDefault()
    mainValidate()
})


function mainValidate() {
    function vornameValidate() {
        const vorname = document.querySelector("#vorname").value;
        const errorVorname = document.getElementById("errorVorname");
        if (vorname === "") {
            errorVorname.innerText = "Darf nicht leer sein"
        } else if (!("ABCDEFGHIJKLMNIOPQRSTUVXYZ".split("").includes(vorname[0]))) {
            errorVorname.innerText = "Muss mit einem Großbuchstaben beginnen"
        } else if(vorname.length <= 2){
            errorVorname.innerText = "Muss aus mindestens drei Zeichen bestehen "
        } else if(vorname.length >= 16){
            errorVorname.innerText = "Muss aus mindestens 15 Zeichen bestehen "
        } else {
            errorVorname.innerText = ""
        }
    }
    function nachnameValidate() {
        const nachname = document.querySelector("#nachname").value;
        const errorNachname = document.getElementById("errorNachname");
        if (nachname === "") {
            errorNachname.innerText = "Darf nicht leer sein"
        } else if (!("ABCDEFGHIJKLMNIOPQRSTUVXYZ".split("").includes(nachname[0]))) {
            errorNachname.innerText = "Muss mit einem Großbuchstaben beginnen"
        }  else if(nachname.length <= 2){
            errorNachname.innerText = "Muss aus mindestens drei Zeichen bestehen "
        } else if(nachname.length <= 2){
            errorNachname.innerText = "Muss aus mindestens drei Zeichen bestehen "
        } else if(nachname.length >= 16){
            errorNachname.innerText = "Muss aus mindestens 15 Zeichen bestehen "
        } else {
            errorNachname.innerText = ""
        }
    }
    function emailValidate() {
        const email = document.querySelector("#email").value;
        const errorEmail = document.getElementById("errorEmail");
        if (email === "") {
            errorEmail.innerText = "Darf nicht leer sein"
        }   else if(!isNaN(email)) {
            errorEmail.innerText = "Sie können keine Zahlen eingeben."
        }   else{
            const isValidEmail = validateEmail(email) !== null

            if (!isValidEmail) {
                errorEmail.innerText = "E-Mail ist nicht valide"
                console.log("%cFunktionert es ? ", "background-Color:pink")
            } else {
                errorEmail.innerText = ""
            }
        }
    }
    function betreffValidate() {
        
    }





    vornameValidate()
    nachnameValidate()
    emailValidate()
    betreffValidate()
}