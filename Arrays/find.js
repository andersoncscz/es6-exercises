const { students } = require('./Arrays')


//Returns the element found, according to the argument used
const studentFound = students.find(student => student.name === 'anderson')
console.log('before: ', students)
console.log('------------------------------------------------------------------------------------------------------------------------------')
console.log('after: ', studentFound)