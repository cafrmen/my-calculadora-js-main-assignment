const buttons = document.querySelectorAll('button');
const inputDisplay = document.querySelector('.screen');
const operatorType = document.querySelector('.operatorClass'); // por si se pone info
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#erase');
const resultBtn = document.querySelector('#equals');
const dot = document.querySelector('.dot');
// ¡¡¡variables importantes!!!
let operator1 = '';
let operator2 = '';
let inputArray = [];
let num1 = '';
let num2 = '';
let result = '';
resultBtn.disabled = true;

function defaultValues() {
    operator1 = '';
    operator2 = '';
    inputArray = [];
    num1 = '';
    num2 = '';
    result = '';
    resultBtn.disabled = true;
}

// operation functions
const add = (a, b) => {
    result = (Number(a) + Number(b)).toFixed(2);
    num1 = result;
    num2 = '';
    operator1 = operator2;
    operator2 = '';
    inputDisplay.textContent = num1;
    if (operator1 === '=') {
        defaultValues();
    }
}

const substract = (a, b) => {
    result = (Number(a) - Number(b)).toFixed(2);
    num1 = result;
    num2 = '';
    operator1 = operator2;
    operator2 = '';
    inputDisplay.textContent = num1;
    if (operator1 === '=') {
        defaultValues();
    }
}

const multiply = (a, b) => {
    result = (Number(a) * Number(b)).toFixed(2);
    num1 = result;
    num2 = '';
    operator1 = operator2;
    operator2 = '';
    inputDisplay.textContent = num1;
    if (operator1 === '=') {
        defaultValues();
    }
}

const divide = (a, b) => {
    if (b === '0') {
        operatorType.textContent = 'You can\'t divide by 0 ... press AC button.';
        clearButton();
    } else {
        result = (Number(a) / Number(b)).toFixed(2);
        num1 = result;
        num2 = '';
        operator1 = operator2;
        operator2 = '';
        inputDisplay.textContent = num1;
        if (operator1 === '=') {
            defaultValues();
        }
    }
}

// botones de ac y borrar un dígito
function clearButton() {
    operator1 = '';
    operator2 = '';
    inputArray = [];
    num1 = '';
    num2 = '';
    result = '';
    resultBtn.disabled = true;
    inputDisplay.textContent = '';
}
function eraseButton() {
    inputArray.pop();
    inputArray.pop();
}

function operate(button) {
    let forNum = 0;
    let value = button.textContent;
    inputArray.push(value);

    if (value === 'AC' || (value === '=' && !operator1)) {
        clearButton();
    } else if (value === '↼') {
       eraseButton();
    }

    let theArray = inputArray.join('');
    inputDisplay.textContent = theArray;

    if (button.id.match('operator') && operator1 === '') {
        operator1 = value;
        forNum = theArray.slice(0, -1);
        theArray = '';
        inputArray = [];
        num1 = forNum;
        inputDisplay.textContent = theArray;
        resultBtn.disabled = false;
    } else if ((button.id.match('operator') && operator1 && !operator2 || (button.id.match('equals') && operator1 && !operator2))) {
        operator2 = value;
        forNum = theArray.slice(0, -1);
        theArray = '';
        inputArray = [];
        num2 = forNum;
        inputDisplay.textContent = theArray;
    } else if (theArray.includes('.')) {
        dot.disabled = true;
        operatorType.textContent = 'Your number already has a dot.';
    } else if (!theArray.includes('.')) {
        dot.disabled = false;
        operatorType.textContent = '';
    }

    if (operator1 && operator2 && num1 && num2) {
        if(operator1 === '+') {
            add(num1, num2);
        } else if (operator1 === '-') {
            substract(num1, num2);
        } else if (operator1 === '*') {
            multiply(num1, num2);
        } else if (operator1 === '/') {
            divide(num1, num2);
        }
    }

    // solo para checar BORRAR LUEGO
    console.log('num1:' + num1);
    console.log('num2:' + num2);
    console.log('input array:' + inputArray)
    console.log('operator1:' + operator1);
    console.log('operator2:' + operator2)
    console.log('the array:' + theArray); // need to separate values
}

buttons.forEach(button => button.addEventListener('click', () => operate(button)));

/*
checar el operador por tercera vez
el 0 antes
add keyboard support
*/

// clave para el keyboard support
document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);