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

fizzBuzz(15);


function average(numbers) {
    let total = numbers[0];
   
    numbers.forEach(()=>{
      total += numbers
      console.log(numbers)
    })
  
  return total / numbers.length;
  }

  average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);