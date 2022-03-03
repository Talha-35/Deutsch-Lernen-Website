import {validateEmail, validatePhone} from "./Validators.js";

const button = document.querySelector("#buttonSignup");

button.addEventListener("click", (e) => {
    e.preventDefault()
    mainSignupValidate()
})




function mainSignupValidate() {

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
            errorVorname.innerText = "Darf maximal 15 Zeichen lang sein"
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
        } else if(nachname.length >= 16){
            errorNachname.innerText = "Darf maximal 15 Zeichen lang sein"
        } else {
            errorNachname.innerText = ""
        }
    }    
    function phoneValidate() {
        const telefonnummer = document.querySelector("#telefonnummer").value;
        const errorTelefonnummer = document.getElementById("errorTelefonnummer");
        const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{6})$/;
           
        
        if (isEmpty(telefonnummer)) {
            errorTelefonnummer.innerText = "Darf nicht leer sein"
            }   else if(telefonnummer.length <= 5){
                errorTelefonnummer.innerText = "Muss mindestens sechs Zeichen lang sein"
            } else if (validatePhone(telefonnummer) === null) {
                errorTelefonnummer.innerText = "Muss eine valide Telefonnummer sein"
            } else {
                errorTelefonnummer.innerHTML =  ""
            }

            /*
            if (telefonnummer === "") {
                errorTelefonnummer.innerText = "Darf nicht leer sein"
            }  else if(telefonnummer.match(phoneno)) {
                return true;
            } else {
                errorTelefonnummer.innerText = "Telefonnummer ist nicht valide"                
                return false;
            }*/

            function isEmpty(telefonnummer) {
                return telefonnummer.length === 0
            }
    }
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
        const passwort1 = document.getElementById("passwort1").value;
        const passwort2 = document.getElementById("passwort2").value;
        const errorPasswort1 = document.getElementById("errorPasswort1");
        const errorPasswort2 = document.getElementById("errorPasswort2");
        const passwortMix =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
       
            
            if (passwort1.match(passwortMix)) {
                     errorPasswort1.innerText = ""
                 }    else {
                     errorPasswort1.innerHTML =  "8 Zeichen, Klein/Großbuchstaben, Ziffer und Sonderzeichen"
                 }
     
                 if (passwort2.match(passwortMix)) {
                     errorPasswort2.innerText = ""
                 }    else{
                     errorPasswort2.innerHTML =  "8 Zeichen, Klein/Großbuchstaben, Ziffer und Sonderzeichen"
                 }
     
                 if (passwort1 !== passwort2) {
                     errorPasswort1.innerHTML =  "Die Passwörter stimmen nicht überein "
                 }
           
    }
    vornameValidate()
    nachnameValidate()
    phoneValidate()
    emailValidate()
    passwortValidate()
  
}



