// program to print the prime numbers from 1 to 100

// outerloop : for(let i =1;i<100;i++){
//     for(let j=2;j<=i/2;j++){
//         if(i%j==0){
//             continue outerloop;
//         }
//     }
//     console.log(i);
// }

// for (let i = 1; i < 100; i++) {
//   let isPrime = false;
//   for (let j = 2; j <= i / 2; j++) {
//     if (i % j == 0) {
//       isPrime = true;
//     }
//   }
//   if (!isPrime) {
//     console.log(i);
//   }
// }


let demo ="Hello What's up ?";
let reversedDemo;
let demoLength = demo.length;
let reversedDemolength =0;
do{
    
    reversedDemo = reversedDemo + demo[demoLength-reversedDemolength];
    reversedDemolength++;
}while(reversedDemolength != demoLength)

    console.log(reversedDemo);
    