    //Chage dark theme 
    const buttonChangeTheme = document.querySelector(".change-theme");
    buttonChangeTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    })

    //Capture of the elements of the Dom
    const numberButtons = document.querySelectorAll(".number-button");
    const operatorButtons = document.querySelectorAll(".operator-button");
    const resetButton = document.querySelectorAll(".reset-button")[0];
    const equalButton = document.querySelectorAll(".equal-button")[0];
    let display = document.querySelector(".display");
    let displayOperator = document.querySelector(".displayOperator");

    //Declaration of main variables;
    let currentOperator = "";
    let previousOperator = "";
    let operator;

    //Reset display for default
    resetDisplay();


    //Functions

    //Add number to display
    function addNumberDisplay(number) {
        currentOperator = currentOperator.toString() + number.toString();
        updateDisplay();
    }

    //Update display
    function updateDisplay() {
        display.innerText = currentOperator;
    }

    //Reset Display
    function resetDisplay() {
        currentOperator = "";
        previousOperator = "";
        operator = " ";
    }

    //View operator in the second display
    function viewOperator(typeOperation) {
        if (typeOperation === undefined) {
            typeOperation = "";
        }
        displayOperator.innerText = typeOperation;
    }

    //Identify the operation 
    function typeOperation(typeOperation) {
        viewOperator(typeOperation);
        if (currentOperator === "") return;

        if (previousOperator !== "") {
            resultOperation();
        }
        operator = typeOperation.toString();
        previousOperator = currentOperator;
        currentOperator = "";
    }

    //Result of the operation
    function resultOperation() {
        let result;

        //Convert text to Int

        let firstValue = parseInt(previousOperator);
        let secondValue = parseInt(currentOperator);
        if (isNaN(firstValue) || isNaN(secondValue)) {
            return;
        }
        //Operations
        switch (operator) {
            case "-":
                result = firstValue - secondValue;
                break;
            case "+":
                result = firstValue + secondValue;
                break;
            case "x":
                result = firstValue * secondValue;
                break;
            case "/":
                result = firstValue / secondValue;
                break;
            default:
                break;
        }
        currentOperator = result;
        previousOperator = "";
        operator = "";
    }


    //User events 

    //Number buttons (Node List)
    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            addNumberDisplay(button.innerText);
        })
    })

    //Operator buttons (Node List)
    operatorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            typeOperation(button.innerText);
        })
    })

    //Equal Button 
    equalButton.addEventListener("click", function () {
        resultOperation();
        updateDisplay();
    })

    //Reset Button 
    resetButton.addEventListener("click", function () {
        resetDisplay();
        updateDisplay();
        viewOperator()
    })