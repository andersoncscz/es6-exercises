const { students } = require('./Arrays')


//Returns an new array filtered by the argument used
const overEighteen = students.filter(student => student.age >= 26)
console.log('before: ', students)
console.log('------------------------------------------------------------------------------------------------------------------------------')
console.log('after: ', overEighteen)