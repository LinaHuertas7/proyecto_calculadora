window.addEventListener("load", function () {

    //Chage dark theme 
    const buttonChangeTheme = document.querySelector(".change-theme");
    buttonChangeTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    })

    //Calculator logic
    const numberButtons = document.querySelectorAll(".number-button");
    const operatorButtons = document.querySelectorAll(".operator-button");
    const resetButton = document.querySelectorAll(".reset-button")[0];
    const equalButton = document.querySelectorAll(".equal-button")[0];
    let display = document.querySelector(".display");
    let displayOperator = document.querySelector(".displayOperator");


    //console.log(numberButtons);
    //console.log(operatorButtons);
    //console.log(resetButton);
    //console.log(equalButton);
    //console.log(display);



    let currentOperator = "";
    let previousOperator = "";
    let operator;

    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            addNumberDisplay(button.innerText);
        })
    })

    operatorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            typeOperation(button.innerText);
            //alert(button.innerText)
        })
    })

    equalButton.addEventListener("click", function () {
        resultOperation();
        updateDisplay();
    })

    resetButton.addEventListener("click", function () {
        resetDisplay();
        updateDisplay();
    })




    //Funciones

    //Agregar numero 
    function addNumberDisplay(number) {
        currentOperator = currentOperator.toString() + number.toString();
        //console.log(result);
        updateDisplay();
        //console.log(display.value);
    }

    //Actualizar display
    function updateDisplay() {
        display.innerText = currentOperator;
    }

    //Reset Display
    function resetDisplay() {
        currentOperator = "";
        previousOperator = "";
        operator = "";
    }

    function viewOperator(typeOperation){
        displayOperator.innerText = typeOperation;
    }

    //Operation 
    function typeOperation(typeOperation) {
        viewOperator(typeOperation);
        if (currentOperator === "")return;
        
        if (previousOperator !== "") {
            resultOperation();
        }
        operator = typeOperation.toString();
        previousOperator = currentOperator;
        currentOperator = "";
    }


    function resultOperation() {
        let result;
        let firstValue = parseInt(previousOperator);
        let secondValue = parseInt(currentOperator);
        if (isNaN(firstValue) || isNaN(secondValue)) {
            return;
        }

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

    resetDisplay();
})