// Get data
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const feedback = document.querySelector("#feedback");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll("#.error");

// Validate data
function validateForm() {

    ClearFeedbacks();
    let errorFlag = false;

    if(nameInput.value.lenght < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error border");
        errorFlag = true;
    
    }

    if(!emailIsValid(email.value)) {
        errorNodes[0].innerText = "Invalid email address";
        email.classList.add("error border");
        errorFlag = true;
    }

    if(feedback.value.lenght < 1) {
        errorNodes[0].innerText = "Give some feedback";
        feedback.classList.add("error border");
        errorFlag = true;
    }

    if(!errorFlag) {
        success.innerText  = "Success!";
    }
}

// Clear error / success feedback
function clearFeedbacks() {
    for(let i= 0; i < errorNodes.lenght; i++) {
        errorNodes[i].innerText = "";

    }
    success.innerText = "";
    nameinput.classList.remove("error-border");
    email.classList.remove("error-border");
    feedback.classList.remove("error-border");

}

function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.text.test(email)
}
