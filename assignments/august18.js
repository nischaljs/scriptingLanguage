// program to print the prime numbers from 1 to 100

outerloop : for(let i =1;i<100;i++){
    for(let j=2;j<=i/2;j++){
        if(i%j==0){
            continue outerloop;
        }
    }
    console.log(i);
}

for (let i = 1; i < 100; i++) {
  let isPrime = false;
  for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      isPrime = true;
    }
  }
  if (!isPrime) {
    console.log(i);
  }
}

// Write a javascript program to reverse a string using a do while loop.
let string = "hello world";
let revString = '';
let i = 1;

do {
    revString += string[string.length - i];
    i++;
} while (i <= string.length);

console.log(revString);

// Write a javascript program to create an array of objects representing people, where each object has a name and age property. Use push() to add a new person to the array, and use pop() to remove the last person from the array.

const people = [
  {
    name: "Nischal",
    age: 12,
  },
];
console.log(people);


people.push({
    name:"Nirman",
    age:12
})
console.log(people);


people.pop();

console.log(people);


// Write a javascript program to create an array of strings and remove the first element from the array Then add a new string to the beginning of the array. Using shift() and unshift().


const ArrayOfStrings  = ["nischal","hello","einstein","century"];
console.log(ArrayOfStrings);

ArrayOfStrings.unshift("notebook","array")
console.log(ArrayOfStrings);


ArrayOfStrings.shift();

console.log(ArrayOfStrings);

