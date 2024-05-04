document.addEventListener("DOMContentLoaded", function() {
    var numberInput = document.getElementById("number");
    var output = document.getElementById("output");
    var gameContainer = document.getElementById("game-container");
    var game = document.getElementById("game");
    var convertBtn = document.getElementById("convert-btn");

    convertBtn.addEventListener("click", function() {
        var userInput = parseInt(numberInput.value);

        if (userInput <= 0) {
            output.textContent = "Please enter a number greater than or equal to 1";
            gameContainer.style.backgroundColor = "red";
            output.style.display = "block";
            gameContainer.style.display = "block";
        } 

        if (userInput === "" || isNaN(userInput)) {
            output.textContent = "Please enter a valid number";
            gameContainer.style.backgroundColor = "red";
            output.style.display = "block";
            gameContainer.style.display = "block";
        }   

        if (userInput > 0) {
            
        }

    });
});
