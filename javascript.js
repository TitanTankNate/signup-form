// DOM Query Selectors
let submitButton = document.querySelector("button");                    // Submit button
let form = document.querySelector("form");                              // Form
let formInputs = document.querySelectorAll("input");                    // Form fields
const passwordEntered = document.querySelector("#password-enter");      // Password
const passwordConfirmed = document.querySelector("#password-confirm");  // Confirmed password
const formWrapper = document.querySelector(".form-wrapper");

// Initialize form defaults
submitButton.disabled = true;



// EVENT LISTENERS  EL  EL  EL  EL  EL  EL  EL  EL  EL  EL  EL  EL  EL
submitButton.addEventListener("click", () => {
    // DEBUG ONLY: If a user clicks the submit button, take all of the form data
    // and print it to the console.
    formInputs.forEach((input) => {
        console.log(input.id + ": " + input.value);
    });

    // Reset form for another submission
    form.reset();
});

// Set up listener for password confirmation field
passwordConfirmed.addEventListener("focus", () => {
    // With each keystroke, see if password confirmed matches password entered
    passwordConfirmed.addEventListener("keyup", () => {
        passwordChecker();
    })
})



// [FUNCTION] passwordChecker()
// When run, this function reads inputs from the "Password" and 
// "Confirm Password" fields, and runs a validation check on them.
// Validity triggers additional function calls.
function passwordChecker() {
    // Convert string inputs to arrays
    let passwordEnteredArray = Array.from(passwordEntered.value);
    let passwordConfirmedArray = Array.from(passwordConfirmed.value);

    // console.log("Password entered: " + passwordEnteredArray + "\nPassword confirmed: " + passwordConfirmedArray);

    // Before wasting time comparing characters, check if password 
    // lengths even match
    if (passwordConfirmedArray.length == passwordEnteredArray.length) {
        // If the lengths are identical, iterate on each character
        for(let i = 0;i<passwordEnteredArray.length; i++){
            // If at any point the characters do not match, return void
            if (passwordEnteredArray[i] !== passwordConfirmedArray[i]) {
                setInputFieldCSS(false);
                submitButton.disabled = true;
                return;
            // Else, continue iterating until the analysis is complete
            } else {
                setInputFieldCSS(true);
                submitButton.disabled = false;
            }
        }
        return;

    } else {
        // If the lengths don't even match, return false immediately
        submitButton.disabled = true;
        setInputFieldCSS(false);
        return;
    };
}

// [FUNCTION] setInputFieldCSS
// This function takes in a boolean value, and if true, sets CSS styles
// for elements to their "valid" state, and removes error messages.  If
// false, displays "invalid" state, and creates error message.
function setInputFieldCSS(boolean) {
    if (boolean) {
        // Change field style
        passwordEntered.style.border = "2px solid var(--valid-color)";
        passwordConfirmed.style.border = "2px solid var(--valid-color)";

        // If error message exists, delete it
        if (document.querySelector(".error-message")!==null) {
            document.querySelector(".error-message").remove();
        }
    } else {
        // Change field style
        passwordEntered.style.border = "2px solid #FF0000";
        passwordConfirmed.style.border = "2px solid #FF0000";

        // If error message doesn't already exist, create one
        if (document.querySelector(".error-message")==null) {
            let errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.textContent="Passwords do not match!";
            formWrapper.appendChild(errorMessage);
        }
        
    }
}