
let algos = []
let fizzBuzz = {};

//first prompt
fizzBuzz['prompt'] = `Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5,
"buzz" in place of numbers divisible by 5 but not by 3,
and "fizzbuzz" in place of numbers divisible by both 3 and 5.

fizzbuzz(16); ->
[1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]`

//first boilerplate code for user
fizzBuzz['bp'] = `
  const fizzbuzz = num => {
    //todo
  };
`
//input
let output1 = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16];

//first test for user
fizzBuzz['tests'] = [];
fizzBuzz['tests'].push([16, output1])

algos.push(fizzBuzz);


export default fizzBuzz;

