const nameInput = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const success = document.querySelector(".success");
const errorNodes = document.querySelectorAll(".error");  //ik haal hier alle classes van html in javascript


function validateForm() {

    clearMessages(); 
    let errorFlag = false; 

    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank"; //als je niets hebt ingevuld krijg je de error
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
        if(!emailIsValid(email.value)) {
            errorNodes[1].innerText = "Invalid email address";
            email.classList.add("error-border");
            errorFlag = true;
        }   

        if(message.value.length < 1) { //alls je  message minder dan 1 woord heeft krijg je een error
            errorNodes[2].innerText = "Please enter message";
            message.classList.add("error-border");
            errorFlag = true;
        }

        if(!errorFlag){
            success.innerText = "Success!" //als alles is ingevuld krijg, zegt de website dat het heeft gewerkt!
        }
}

function clearMessages() { //als alles is ingevuld dan haalt die alle errors weg
    for(let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email) { //hij kijkt hier of je bijvoorbeeld een "@" hebt gebruikt voor je email, als dat niet zo is krijg je een error
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

const contact = document.querySelector(".contactus");

contact.addEventListener('click', contactus)
function contactus() {
window.location.href = "index.html"
}