
let screenResult = document.getElementById('screen-result'); 


function toSum() {
    const value1 = Number(document.getElementById('value1').value);
    const value2 = Number(document.getElementById('value2').value);

    const result = value1 + value2;


    screenResult.placeholder = result;
}

function toSubtract() {
    const value1 = Number(document.getElementById('value1').value);
    const value2 = Number(document.getElementById('value2').value);

    const result = value1 - value2;

    screenResult.placeholder = result; 
}

function toMultiplicate() {
    const value1 = Number(document.getElementById('value1').value);
    const value2 = Number(document.getElementById('value2').value);

    const result = value1 * value2

    screenResult.placeholder = result; 
}

function toDivide() {
    const value1 = Number(document.getElementById('value1').value);
    const value2 = Number(document.getElementById('value2').value);

    const result = value1 / value2; 

    screenResult.placeholder = result; 
}