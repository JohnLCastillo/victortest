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


function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        switch (true) {
            case i % 15 === 0:
                console.log('FizzBuzz');
                break;
            case i % 3 === 0:
                console.log('Fizz');
                break;
            case i % 5 === 0:
                console.log('Buzz');
                break;
            default:
                console.log(i);
                break;
        }
    }
}

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     // let ans = i % 15 === 0;
//     // let ans2 = i % 5 === 0;
//     // let ans3 = i % 3 === 0;
//       switch (ans) {
//           case 15:
//               console.log('FizzBuzz');
//               break;
//           case 5:
//               console.log('Fizz');
//               break;
//           case 3:
//               console.log('Buzz');
//               break;
//           default:
//               console.log(i);
//               break;
//       }
//   }
// }

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


// function repeat(fn,n){
//   for(let i = 0;i <= n;i++){
//     fn();
//   }
// }

// function hello(){
//   console.log('Hello world');
// }

// function goodbye(){
//   console.log('Goodbye World')
// }

// repeat(goodbye,10);


//Functions as arguments (2)

// Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];


// // TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
// 	let newArray = [];
// 	for (let i = 0; i < arr.length; i++){
// 		if (fn(arr[i])) {
// 			//Check if invoking the fn function while passing in the current element of arr returns true
// 			newArray.push(arr[i]);			
// 		}
// 		//Push the current element of arr into our newArray
// 	}
// 	return newArray;
// }

// const filteredNames = filter(myNames, function(name) {
// 	// This is a "predicate function" - it's a function that only returns a boolean
// 	return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']



//Functions as arguments (2) with Fat Arrow

// Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];


// // TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
// 	let newArray = [];
// 	for (let i = 0; i < arr.length; i++){
// 		if (fn(arr[i])) {
// 			//Check if invoking the fn function while passing in the current element of arr returns true
// 			newArray.push(arr[i]);			
// 		}
// 		//Push the current element of arr into our newArray
// 	}
// 	return newArray;
// }

// console.log(filter(myNames, (name) => name[0] === 'R'));

	// This is a "predicate function" - it's a function that only returns a boolean



// console.log(filteredNames) // => ['Rich', 'Ray']

// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;
//   let sup;
//   return function (location) {
//     warningCounter++;
//     if (warningCounter >= 2 || 0) {
//       sup = 'times';
//     } else {
//       sup = 'time';
//     }
//     console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${sup} today`);
//   }
// }
// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const earthquakeWarning = hazardWarningCreator('Earth is moving');
// const hurricaneWarning = hazardWarningCreator('Gust of wind');

// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Centinela Ave and Olympic Blvd');
// console.log(turtleArray.filter(is_wanted));

// const turtleMove = turtleArray.filter(movement => movemenet < 0);


// function (sub1, sub2) {

// }
// function turtleCheck(turtleArray){
// 	const check = [];
// 	for (i = 0; i < turtleArray; i++) {
// 		for (j = 0; j < turtleArray[i]; j++) {
// 			const check = turtleArray.filter(j => j > 0);
// 		}
// 	}
// 	console.log(check);
// } 

// turtleCheck();