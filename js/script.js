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


    //console.log(numberButtons);
    //console.log(operatorButtons);
    //console.log(resetButton);
    //console.log(equalButton);
    console.log(display);



    let operatorB = "";
    let operatorA = "";
    let operator;

    numberButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            addNumberDisplay(button.innerText);
        })
    })
    
    operatorButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            typeOperation(button.innerText);
            //alert(button.innerText)
        })
    })

    equalButton.addEventListener("click", function() {
        resultOperation();
        updateDisplay();
    })

    resetButton.addEventListener("click", function() {
        resetDisplay();
        updateDisplay();
    })




    //Funciones

    //Agregar numero 
    function addNumberDisplay (number){
        operatorB = operatorB.toString() + number.toString();

        //console.log(result);
        updateDisplay();
        //console.log(display.value);
    }

    //Actualizar display
    function updateDisplay() {
        if (operator == null) {
            display.value = operatorB;
        }else{
            display.value = operator;
        }
    }

    //Reset Display
    function resetDisplay() {
        operatorB = "";
        operatorA = "";
        operator = null;
    }

    //Operation 
    function typeOperation(typeOperation){
        if (operatorB !== "") {
            operator = typeOperation.toString();
            operatorB = operatorA;
            operatorA = "";
            calculate();
            updateDisplay();
        }
    }

    function resultOperation() {
        let result = 0;
        let firstValue = parseInt(operatorB);
        let secondValue = parseInt(operatorA);
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
    }setTimeout(() => {
        resetDisplay();
    }, "1000")

})