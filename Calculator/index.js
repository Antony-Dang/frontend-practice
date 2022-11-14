let stack = [];
let numbers = Array(10).fill(0).map((n, i) => (n + i).toString())
let ops = ["Add", "Sub", "Mul", "Div"];
let instantOps = ["Mul", "Div"];

initialiseNumbers();
initialiseOps();
initialiseClear();
initialiseEval();


function initialiseEval() {
    let evalButton = document.querySelector("#equal");
    clearBuevalButtontton.addEventListener('click', function(e) {
        let total = evaluate();
        console.log(total);
    });

}

function initialiseClear() {
    let clearButton = document.querySelector("#clear");
    clearButton.addEventListener('click', function(e) {
        stack = [];
        console.log(stack);
    });
}


function initialiseNumbers() {
    let dig = "#dig";
    for (let i = 0; i < 10; i++) {
        let id = dig + i;
        let numButton = document.querySelector(id);
        numButton.addEventListener('click', function(e) {
            addToStack(i.toString());
            console.log(stack);
        });
    }
}


function addToStack(input) {
    topStack = stack[stack.length - 1]

    // If input is operation check if top stack is operation
    if (ops.includes(input)) {
        if (ops.includes(topStack)) {
            return;
        }
    } else {
        if (topStack != null && !ops.includes(topStack)) {
            stack.pop();
            input = topStack + input;
        }
    }

    stack.push(input.toString());
}


function initialiseOps() {
    let opId = "#op"; 
    ops.forEach(op => {
        let id = opId + op;
        console.log(id);
        let opButton = document.querySelector(id);

        opButton.addEventListener('click', function(e) {
            addOpToStack(op);
            console.log(stack);
        });
    })
}

function addOpToStack(op) {
    if (stack.length == 0) {
        return;
    }
    addToStack(op);
}



function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}