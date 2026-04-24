const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");

let currentInput = "";

buttons.forEach((button) => {
    const value = button.getAttribute("data-value");

    if (value) {
        button.addEventListener("click", () => {
            currentInput += value;
            display.value = currentInput;
        });
    }
});

clearBtn.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
});

equalBtn.addEventListener("click", () => {
    try {
        // Evaluate the expression
        const result = eval(currentInput);
        display.value = result;
        currentInput = String(result);
    } catch (e) {
        display.value = "Error";
        currentInput = "";
    }
});
