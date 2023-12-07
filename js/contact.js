var nameError = document.getElementById("fullname_error");
var emailError = document.getElementById("email_error");
var subjectError = document.getElementById("subject_error");
var messageError = document.getElementById("message_error");
var submitError = document.getElementById("submitError");

//VALIDATION FOR NAME--------------------------------//
function validateName() {

    var name = document.getElementById("name").value;
    if (name.length == 0 && name.length < 5) {
        nameError.style.display = "block";
    }

    if (name.length > 5) {
        nameError.style.display = "none";
        return true;
    } else {
        nameError.style.display = "block";
        return false;
    }

}


//VALIDATION FOR  EMAIL--------------------------------//

function validateEmail() {

    var email = document.getElementById("email").value;
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.style.display = "block";
    }
    else {
        emailError.style.display = "none";
        return true;
    }
    console.log("working");

}


//VALIDATION FOR SUBJECT--------------------------------//
function validateSubject() {

    var subject = document.getElementById("subject").value;
    if (subject.length == 0 && subject.length < 15) {
        subjectError.style.display = "block";
    }

    if (subject.length > 15) {
        subjectError.style.display = "none";
        return true;
    } else {
        subjectError.style.display = "block";
        return false;
    }

}

//VALIDATION FOR MESSAGE--------------------------------//
function validateMessage() {

    var message = document.getElementById("message").value;
    if (message.length == 0 && message.length < 25) {
        messageError.style.display = "block";
    }

    if (message.length > 15) {
        messageError.style.display = "none";
        return true;
    } else {
        messageError.style.display = "block";
        return false;
    }
}


function success_message() {
    const success = document.getElementById("success");
    const warn = document.getElementById("warn");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        warn.style.display = "block";
    }
    else {
        setTimeout(() => {
            name = "";
            email = "";
            subject = "";
            message = "";
        }, 2000);
        success.style.display = "block";
        window.alert("Thanks! Your Message is sent");
    }
}






/*-------------PREVIOUS CODE----------------------


const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const emailAddress = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const nameError = document.querySelector("#fullname_error");
const emailError = document.querySelector("#email_error");
const subjectError = document.querySelector("#subject_error");
const messageError = document.querySelector("#message_error");


//-----------FUNCTIONS FOR VALIDATING ALL THE USER INPUTS-------------//
function validateForm() {

    event.preventDefault();
    if (checkLengthName(fullName.value, 5) === true && fullName.value === 5) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(emailAddress.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLengthSubject(subject.value, 15) === true) {
        nameError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLengthMessage(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }


}

//----EVENTLISTENER METHOD---------------//
form.addEventListener("submit", validateForm);

//--------FUNCTIONS FOR CHECKING THE LENGTH OF ALL INPUTS//
function checkLengthName(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailAddress) {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const patternMatches = regEx.test(emailAddress);
    return patternMatches;
}


function checkLengthSubject(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkLengthMessage(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

*/


































/*fIRST GETTING DATA FROM USER INPUT
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll("#error");


//VALIDATE DATA

function validateForm() {

    clearMessages();

    if (nameInput.value.length < 1) {
        console.log("whats happening?");
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        console.log("whats happenign");
    }
}

//CLEAR ERROR / SUCCESS MESSAGE
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
}

*/