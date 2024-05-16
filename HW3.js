// #1
let hamburgers = 3;
fries = 1;
if ((hamburgers >= 3) && (fries >= 1)) {
    console.log('We all ate');
} else {
    console.log('We are going elsewhere');
}

// #2

let price = 1901;
if ((price >= 1000) && (price <= 1900)) {
    console.log('Price between 1000 and 1900');
} else {
    console.log('Price is not between 1000 and 1900');
}

// #3

if (!(price >= 1000) || !(price <= 1900)) {
    console.log('Prices is not between 1000 and 1900');
} else {
    console.log('Prices between 1000 and 1900');
}

if ((price <= 1000) || (price >= 1900)) {
    console.log('Prices is not between 1000 and 1900');
} else {
    console.log('Prices between 1000 and 1900');
}

// #4

let season = 3;
if (season === 1) {
    console.log('spring')
} else if (season === 2) {
    console.log('summer')
} else if (season === 3) {
    console.log('autumn')
} else if (season === 4) {
    console.log('winter');
} else console.log('wrong number, only 1 to 4')

// #5

let a = 12;
b = 33;
c = 32;

if ((a >= b && a <= c) || (a <= b && a >= c)) {
    console.log(a);
} else if ((b >= a && b <= c) || (b <= a && b >= c)) {
    console.log(b);
} else {
    console.log(c);
}

// #6

let day = 7;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('wrong day');
        break;
}

// #7

let num1 = 1;
num2 = 2;
operator = '+';
switch (operator) {
    case '+':
        console.log(num1 + num2);
        break
    case '-':
        console.log(num1 - num2);
        break
    case '*':
        console.log(num1 * num2);
        break
    case '/':
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log('Error: Division by zero');
        }
        break
    default:
        console.log('Error: Invalid operator');
        break
}

// #8
let numbers = [];

for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

console.log(numbers);

// #9

let resultNumbers = [];

for (let i = 1; i <= 9; i++) {
    if (i % 2 === 0) {
        resultNumbers.push(i);
    }
}
for (let i = 1; i <= 9; i++) {
    if (i % 2 !== 0) {
        resultNumbers.push(i);
    }
}

console.log(resultNumbers);

// #10

let total = 0;
const myArr = [2, 3, 4, 5, 6];

for (let i = 0; i < myArr.length; i++) {
    total = total + myArr[i];
}

console.log(total)

// #11
const arrSum = [[1, 2], [3, 4], [5, 6]];
for (let i = 0; i < arrSum.length; i++) {
    for (let j = 0; j < arrSum[i].length; j++) {
        console.log(arrSum[i][j]);
    }
}

// #12
const arrMul = [[1, 2], [3, 4], [5, 6, 7]];

let product = 1;

for (let i = 0; i < arrMul.length; i++) {
    for (let j = 0; j < arrMul[i].length; j++) {
        product = product * arrMul[i][j];
    }
}

console.log(product);


// #13
let str = "hello world";
let vowels = "aeiou";

let modifiedStr = str.replace(new RegExp('[' + vowels + ']', 'gi'), '');

console.log(modifiedStr);

// #14

let kilometers;
let meters = 1.5;
const lastDigit = meters % 10;
const lastTwoDigits = meters % 100;
if (meters === 1000) {
    kilometers = meters / 1000;
    console.log(meters + ' метрів це ' + kilometers + ' кілометр');
} else if (meters === 0 || meters === 1 || (lastTwoDigits >= 11 && lastTwoDigits <= 14)) {
    kilometers = meters / 1000;
    console.log(meters + ' метрів це ' + kilometers + ' кілометрів');
} else if (lastDigit >= 2 && lastDigit <= 4) {
    kilometers = meters / 1000;
    console.log(meters + ' метри це ' + kilometers + ' кілометри');
} else {
    kilometers = meters / 1000;
    console.log(meters + ' метрів це ' + kilometers + ' кілометра');
}
