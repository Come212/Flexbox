let a = 0;
let b = 0;
let op = "";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(a, b, op) {
    switch (op) {
        case "+": 
            return add(a, b);
        case "-": 
            return subtract(a, b);
        case "x": 
            return multiply(a, b);
        case "÷": 
            return divide(a, b);
        default: 
            return "Opérateur invalide"; // Optionnel mais recommandé
    }
}