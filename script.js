// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the string
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
}

// Function to handle button click event
function checkPalindrome() {
    // Get the user input value
    const userInput = document.getElementById('text-input').value;
    // Get the result text element
    const resultText = document.getElementById('result');

    // Check if the user has entered anything
    if (userInput.trim() === "") {
        resultText.textContent = "Please input a value."; // Display an alert if input is empty
        resultText.style.color = 'red'; // Optional: Change text color to red for the alert
    } else {
        // Check if the input is a palindrome
        const result = isPalindrome(userInput);
        resultText.style.color = 'black'; // Reset text color to default
        // Set the result message based on whether it's a palindrome or not
        if (result) {
            resultText.textContent = `"${userInput}" is a palindrome.`; // Include quotation marks around the input
        } else {
            resultText.textContent = `"${userInput}" is not a palindrome.`; // Same as above
        }
    }
}

// Add event listener to the check button when the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('check-btn').addEventListener('click', checkPalindrome);
});
