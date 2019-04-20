const { students } = require('./Arrays')


/*

 It does what its name says, it reduces an array. It can be reduce in a sum of values, in a new array, and so on.

 In this case we're using a temporary array called 'studentNames' to keep the names we want.
 The second parameters '[]' is the initial value for the 'studentNames', as you can see, it's an empty array.

 This example returns a new array containing only the students' names

*/


const names = students.reduce((studentsNames, student) => {
    studentsNames.push(student.name)
    return studentsNames
}, [])
console.log('result 1:', names)