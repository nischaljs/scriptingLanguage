
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1, "fig", "grape");
console.log(fruits);


let numbers = [1, 2, 3, 4];
numbers.push(5, 6);
let lastThree = numbers.slice(-3);
console.log(lastThree);

let animals = ["lion", "tiger", "bear"];
animals.shift();
animals.unshift("elephant");
console.log(animals);

numbers = [10, 20, 30, 40, 50];
numbers.pop();
numbers.splice(1, 2, 60, 70);
console.log(numbers);


let books = ["sirish ko phul", "1984", "The Great Gatsby", "Muna madan", "Romeo and Juilet"];
let extractedBooks = books.slice(2, 5);
console.log(extractedBooks);
