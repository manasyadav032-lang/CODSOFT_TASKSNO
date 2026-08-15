const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let firstNumber = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Number and decimal buttons
        if (!isNaN(value)) {
          currentInput += value;
          display.value = firstNumber + operator + currentInput;
        }

        else if (value === ".") {
        if (!currentInput.includes(".")) {
        currentInput += value;
        display.value = firstNumber + operator + currentInput;
        }
        }

        // Operator buttons
        else if (button.classList.contains("operator")) {
            if (currentInput !== "") {
                firstNumber = currentInput;
                operator = value;
                currentInput = "";

                display.value = firstNumber + operator;
            }
        }

        // Equal button
        else if (button.classList.contains("equals")) {
            if (firstNumber !== "" && currentInput !== "" && operator !== "") {
                const secondNumber = currentInput;
                let result;

                if (operator === "+") {
                    result = Number(firstNumber) + Number(secondNumber);
                } else if (operator === "-") {
                    result = Number(firstNumber) - Number(secondNumber);
                } else if (operator === "×") {
                    result = Number(firstNumber) * Number(secondNumber);
                } else if (operator === "÷") {
                    if (Number(secondNumber) === 0) {
                        display.value = "Error";
                        currentInput = "";
                        firstNumber = "";
                        operator = "";
                        return;
                    }

                    result = Number(firstNumber) / Number(secondNumber);
                }

                display.value = result;
                currentInput = result.toString();
                firstNumber = "";
                operator = "";
            }
        }

        // Clear button
        else if (button.classList.contains("clear")) {
            currentInput = "";
            firstNumber = "";
            operator = "";
            display.value = "";
        }

        // Delete button
        else if (button.classList.contains("delete")) {
            if (currentInput !== "") {
                currentInput = currentInput.slice(0, -1);
                display.value = firstNumber + operator + currentInput;
            }
        }
    });
});

document.addEventListener("keydown", event => {
    const key = event.key;

    const button = [...buttons].find(button => {
        return button.textContent === key;
    });

    if (button) {
        button.click();
    }

    if (key === "Enter") {
        const equalsButton = document.querySelector(".equals");
        equalsButton.click();
    }

    if (key === "Escape") {
        const clearButton = document.querySelector(".clear");
        clearButton.click();
    }

    if (key === "Backspace") {
        const deleteButton = document.querySelector(".delete");
        deleteButton.click();
    }

    if (key === "*") {
        const multiplyButton = [...buttons].find(button => {
            return button.textContent === "×";
        });

        if (multiplyButton) {
            multiplyButton.click();
        }
    }

    if (key === "/") {
        const divideButton = [...buttons].find(button => {
            return button.textContent === "÷";
        });

        if (divideButton) {
            divideButton.click();
        }
    }
});