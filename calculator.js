function calc(a, b, sym) {
    switch (sym) {
        case '+':
            console.log(`${a} + ${b} = ${a + b}`);
            break;
        case '-':
            console.log(`${a} - ${b} = ${a - b}`);
            break;
        case '*':
            console.log(`${a} * ${b} = ${a * b}`);
            break;
        case '/':
            if (a != 0 && b != 0) {
                console.log(`${a} / ${b} = ${a / b}`);
            }
            else {
                console.log("Dividing by zero is not allowed");
            }
            break;
    }
}

module.exports = {
    calc
}