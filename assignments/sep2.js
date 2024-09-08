// 1. Hello World
console.log("Hello, World!");

// 2. Prime numbers between 1 and 100
console.log("Prime numbers between 1 and 100:");
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

// 3. Reverse a string using do-while
function reverseString(str) {
    let reversed = '';
    let i = str.length - 1;
    do {
        reversed += str[i];
        i--;
    } while (i >= 0);
    return reversed;
}

let testString = "JavaScript";
console.log("Reversed string:", reverseString(testString));

// 4. Factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let fact = 1;
    for (let i = num; i > 1; i--) {
        fact *= i;
    }
    return fact;
}

console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 7:", factorial(7));

// 5. Calculate BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

console.log("BMI (70kg, 1.75m):", calculateBMI(70, 1.75));
console.log("BMI (60kg, 1.60m):", calculateBMI(60, 1.60));

// 6. Print even numbers using forEach()
let numbersArray = [10, 15, 20, 25, 30, 35, 40];
console.log("Even numbers in array:");
numbersArray.forEach(function(num) {
    if (num % 2 === 0) {
        console.log(num);
    }
});

// 7. Array of people: push and pop
let people = [
    { name: "John", age: 25 },
    { name: "Sarah", age: 30 },
    { name: "Mike", age: 35 }
];

// Add a person
people.push({ name: "Anna", age: 28 });
console.log("After adding Anna:", people);

// Remove the last person
people.pop();
console.log("After removing the last person:", people);

// 8. Array: shift and unshift
let stringArray = ["apple", "banana", "cherry"];
console.log("Original array:", stringArray);

// Remove the first element
stringArray.shift();
console.log("After removing first element:", stringArray);

// Add a new element to the start
stringArray.unshift("orange");
console.log("After adding to the beginning:", stringArray);
