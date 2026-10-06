let a=0;
let b=0;
let op="";

const add=(a,b) => a+b;
const subtract=(a,b) => a-b;
const multiply=(a,b) => a*b;
const divide=(a,b) => a/b;

function operate(a,b,op){
    switch{
        case(op=="+") return add(a,b);
        case(op=="-") return subtract(a,b);
        case(op=="x") return multiply(a,b);
        case(op=="÷") return divide(a,b);
    }
}