document.addEventListener("DOMContentLoaded", function() {
    var numberInput = document.getElementById("number");
    var output = document.getElementById("output");
    var gameContainer = document.getElementById("game-container");
    var game = document.getElementById("game");
    var convertBtn = document.getElementById("convert-btn");
    var romanNumber;

    convertBtn.addEventListener("click", function() {
        var userInput = parseInt(numberInput.value);

        if (userInput <= 0) {
            output.textContent = "Please enter a number greater than or equal to 1";
            gameContainer.style.backgroundColor = "red";
            output.style.display = "block";
            gameContainer.style.display = "block";
            output.style.color = "white";
        } 

        if (userInput === "" || isNaN(userInput)) {
            output.textContent = "Please enter a valid number";
            gameContainer.style.backgroundColor = "red";
            output.style.color = "white";
            output.style.display = "block";
            gameContainer.style.display = "block";
        }   

        if (userInput > 0 && userInput <= 3999) {
            romanNumber = convertToRoman(userInput);
            output.textContent = romanNumber;
            gameContainer.style.display = "block";
            output.style.display = "block";
        }

        if (userInput >= 4000) {
            output.textContent = "Please enter a number less than or equal to 3999";
            gameContainer.style.backgroundColor = "red";
            output.style.color = "white";
            output.style.display = "block";
            gameContainer.style.display = "block";
        }

        function convertToRoman(num) {
            var roman = "";
            var romanNumList = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            };

            for (var key in romanNumList) {
                if (num >= romanNumList[key]) {
                    roman += key.repeat(Math.floor(num / romanNumList[key]));
                    num = num % romanNumList[key];
                }
            }

            return roman;
        }
    });
});
