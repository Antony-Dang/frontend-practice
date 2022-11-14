let stack = [];
let numbers = Array(10).fill(0).map((n, i) => (n + i).toString())
let ops = ["Add", "Sub", "Mul", "Div"];
let instantOps = ["Mul", "Div"];

initialiseNumbers();
initialiseOps();
initialiseClear();
initialiseEval();

function evaluate() {
    topStack = stack[stack.length - 1] 
    if (stack.length == 0) {
        return;
    }

    if (ops.includes(topStack)) {
        alert("Can't end on operation");
        return;
    }
    let total = parseInt(stack[0]);
    let op;
    for (let i = 1; i < stack.length; i++) {
        input = stack[i];
        if (ops.includes(input)) {
            op = input;
        } else {
            input = parseInt(input);
            if (op === "Add") {
                total = add(total, input);
            }
            if (op === "Sub") {
                total = sub(total, input);
            }
            if (op === "Mul") {
                total = multiply(total, input);
            }
            if (op === "Div") {
                total = divide(total, input);
            }
        }

    }
    stack = [];
    total = total.toString()
    stack.push(total);

    return total;
}

function initialiseEval() {
    let evalButton = document.querySelector("#equal");
    evalButton.addEventListener('click', function(e) {
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

function addToStack(input) {
    topStack = stack[stack.length - 1]

    // If input is operation check if top stack is operation
    if (ops.includes(input)) {
        if (ops.includes(topStack)) {
            return;
        }

        doInstantOp();
    } else {
        if (topStack != null && !ops.includes(topStack)) {
            stack.pop();
            input = topStack + input;
        }
    }

    stack.push(input.toString());
}

function doInstantOp() {
    if (stack.length < 3) {
        return
    }
    op = stack[stack.length - 2] 
    if (instantOps.includes(op)) {
        newNum = stack.pop()
        op = stack.pop()
        prevNum = stack.pop()

        if (op === "Div") {
            stack.push(divide(prevNum, newNum).toString());
        } else {
            stack.push(multiply(prevNum, newNum).toString());
        }
    }
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