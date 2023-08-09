const buttons = document.querySelectorAll('button');
const inputDisplay = document.querySelector('.screen');
const operatorType = document.querySelector('.operatorClass');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#erase');
const resultBtn = document.querySelector('#equals');

// operation functions
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//calculator display and operation for future functionalities
let operator = '';
let inputArray = [];

function clearButton() {
    operator = '';
    inputArray = [];
    inputDisplay.textContent = '0';
}

function eraseButton() {
    inputArray.pop();
    inputArray.pop();
}

function operate(button) {
    let value = button.textContent;
    inputArray.push(value);
    //clear and delete function
    if (value === 'AC') {
        clearButton();
    } else if (value === '↼') {
       eraseButton();
    }
    // missing separate numbers and operator
    // button.id.match('num')
    let theArray = inputArray.join('');
    inputDisplay.textContent = theArray;

    console.log('input array:' + inputArray)
    console.log('operator:' + operator);
    console.log('the array:' + theArray); // need to separate values
}

buttons.forEach(button => button.addEventListener('click', () => operate(button)));

/*
// usar while loop o for loop de dos num y separar numeros y operaciones

// un numero y una operacion - al oprimir operador asignar variables y hacer
una operación y determine una variable

// coll cada numero tiene un numero
simbolo un valor asignado cada simbolo tranformar en la funcion,
esos símbolos los meto en un grupo en especial para que desaparezca la variable
esos numeros se vuelven un valor
loop cada que oprima una operación, se vuelve var 1
se asignan variables 1+1
cuando se oprima igual ya se evalua, que aparezca el resultado de toda la cadena
primera + cero o * 1

// evaluar directamente, es decir cada que se oprime un boton va a realizar una operación,
solo toma un numero y una operacion
solo en igual debe haber dos numeros sino, deshabilitar
*/