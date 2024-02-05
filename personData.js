const os = require('os');

person = {
    name: "Abylai",
    age: 17,
    courses: "Angular, React, NodeJS",
    version: os.version(),
}

function printData() {
    console.log(`Name - ${person.name}`);
    console.log(`Age - ${person.age}`);
    console.log(`Courses - ${person.courses}`);
    console.log(`PC Version - ${person.version}\n`);
}

module.exports = {
    person, printData
};