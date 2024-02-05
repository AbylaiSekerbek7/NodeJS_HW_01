// Ex1
const person = require("./personData");
person.printData();

// Ex2
const calculator = require("./calculator");

calculator.calc(5, 5, "+");
calculator.calc(3, 1, "-");
calculator.calc(5, 5, "*");
calculator.calc(4, 4, "/");
calculator.calc(2, 0, "/");