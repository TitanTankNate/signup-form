// DOM Query Selectors
let submitButton = document.querySelector("button");    // Submit button
let form = document.querySelector("form");              // Form
let formInputs = document.querySelectorAll("input");    // Form fields

submitButton.addEventListener("click", () => {
    console.log("Clicked submit button.");

    // DEBUG: If a user clicks the submit button, take all of the form data
    // and print it to the console.
    formInputs.forEach((input) => {
        console.log(input.id + ": " + input.value);
    });

    form.reset();
});