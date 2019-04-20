const { students } = require('./Arrays')


//Iterates in an array and returns a new one modified if you want to.
const newStudents = students.map(student => Object.assign({}, student, {surname:'Cruz'})) //using object assign
console.log('before: ', students)
console.log('------------------------------------------------------------------------------------------------------------------------------')
console.log('after: ', newStudents)