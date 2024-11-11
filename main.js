// JavaScript function to check the password
let attempts = 3; // Initialize the number of attempts

function checkPassword() {
    const input = document.getElementById("input-password");
    const result = document.getElementById("result");
    const inputField = document.getElementById("input-password");
    const checkButton = document.querySelector("button");

    // Define the correct password
    const correctPassword = "042";

    // Check if the entered password matches the correct password
    if (input.value === correctPassword) {
        result.textContent = "Correct! You've cracked the password!";
        result.classList.remove("text-red-500");
        result.classList.add("text-green-500");
        inputField.disabled = true;
        checkButton.disabled = true;
    } else {
        attempts--; // Decrement attempts on each incorrect try
        if (attempts > 0) {
            result.textContent = `Incorrect password. You have ${attempts} attempts left.`;
            result.classList.remove("text-green-500");
            result.classList.add("text-red-500");
        } else {
            result.textContent = "You've run out of attempts! Access locked.";
            result.classList.remove("text-green-500");
            result.classList.add("text-red-500");
            inputField.disabled = true; // Disable input after 3 attempts
            checkButton.disabled = true; // Disable button after 3 attempts
        }
    }
}
