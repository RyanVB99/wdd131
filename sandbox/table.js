// example 1
const steps = ["one", "two", "three", "seven"];
const listTemplate = function(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

// example 2
const letterGrades = ['A', 'A', 'B'];

const gradeTemplate = function(grade) {
    return `<li>${grade}</li>`;
    }

const lettersToNumbers = function(grade) {
    switch(grade) {
        case 'A':
            return 4;
        case 'B':
            return 3;
        case 'C':
            return 2;
        case 'D':
            return 1;
        case 'F':
            return 0;
    }
}

const numberGrades = letterGrades.map(lettersToNumbers);

const gradesHtml = numberGrades.map(gradeTemplate);

document.querySelector("#myList").innerHTML = gradesHtml.join('');

// example 3

const GPA = 0;
const averageWithInitial = numberGrades.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, GPA);

const average = averageWithInitial / numberGrades.length;
document.querySelector("#GPA").innerHTML = average;

// example 4
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruitTemplate = function(fruit) {
    return `<li>${fruit}</li>`;
}

const shortFruits = fruit.filter(function(fruit) {
    return fruit.length < 6;
});

const shortFruitsHtml = shortFruits.map(fruitTemplate);
document.querySelector("#myList").innerHTML = shortFruitsHtml.join('');

// example 5

const numbers = [12, 34, 2, 54];

const luckyNumber = 21;

const isLuckyNumberPresent = numbers.indexOf(luckyNumber) !== -1;
document.querySelector("#luckyNumberStatus").innerHTML = isLuckyNumberPresent ? "Lucky number is in the array" : "Lucky number is not in the array";