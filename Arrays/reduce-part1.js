const { values } = require('./Arrays')


/*

It does what its name says, it reduces an array. It can be reduce in a sum of values, in a new array, and so on.

This method (reduce) takes 4 parameters, but in the most cases we just use 2 of them.    
- First parameter has to be a callback function, which receives two parameters: 
        1º result - an accumulator variable which saves the temporary total during the iteration.
        2º currentValue - the current array value during the iteration.
    
- Second: Initial value to start the operation.

 **************** The array can't be undefined or it'll throw an error ****************

*/


let sum = 0
sum = values.reduce((currentResult, currentValue) => result + currentValue, 0)
console.log('result 1:', sum)

sum = values.reduce((result, currentValue) => result + currentValue, 50)
console.log('result 2:', sum)