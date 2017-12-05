// //Max and min drill 

// const numbers = [2, 13, 4, 11, 5, 7, 9];

// function max(numbers) {
//     let i = 0;
//     let myCounter = numbers[0];
//     while (i < numbers.length) {
//         if (numbers[i] > myCounter) {
//             myCounter = numbers[i];
//         }
//         i++;
//     }
//     console.log(myCounter);
// }

// max(numbers);

// function min(numbers) {
//     let i = 0;
//     let myMin = numbers[0];
//     while (i < numbers.length) {
//         if (numbers[i] < myMin) {
//             myMin = numbers[i];
//         }
//         i++;
//     }
//     console.log(myMin);
// }

// min(numbers);


// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         switch (true) {
//             case i % 15 === 0:
//                 console.log('FizzBuzz');
//                 break;
//             case i % 3 === 0:
//                 console.log('Fizz');
//                 break;
//             case i % 5 === 0:
//                 console.log('Buzz');
//                 break;
//             default:
//                 console.log(i);
//                 break;
//         }
//     }
// }

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    let ans = i % 15;
    let ans2 = i % 5;
    let ans3 = i % 3;
      switch (ans,ans2,ans3) {
          case 0:
              console.log('FizzBuzz');
              break;
          case 5:
              console.log('Fizz');
              break;
          case 3:
              console.log('Buzz');
              break;
          default:
              console.log(i);
              break;
      }
  }
}

fizzBuzz(15);

// function average(numbers) {
//   let total = numbers[0];
//   let i = 1
//   while (i < numbers.length) {
//     total += numbers[i];
//     i++;
//   }
//   console.log(total / numbers.length);
// }

// function average(numbers) {
//     let total = numbers[0];

//     numbers.forEach(function(i){
//       total += i;
//     });
//   // console.log(total);
//   console.log(total / numbers.length);
//   }

// average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);