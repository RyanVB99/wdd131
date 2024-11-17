const pi = 3.14;

function circleArea(radius) {
    return radius * radius * pi;
}

let radius = 3;
let area = 0;
area = circleArea(radius);
console.log(area);
radius = 4;
area = circleArea(radius);
console.log(area);