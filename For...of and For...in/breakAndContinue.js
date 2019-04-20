const { values } = require('../Arrays/arrays')

//Iterates in a collection in an array, and jump to the next element, according to a condition informed
//In this case, numbers less than 5 won't be printed on the console.
console.log('Using contine')
for (value of values) {
    if (value <= 4) continue //skip all elements which its value is <= 4.
    console.log(value)
}

console.log('Using break')
for (value of values) {
    if (value > 4) break //skip all elements which its value is > 4.
    console.log(value)
}