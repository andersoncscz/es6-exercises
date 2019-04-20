const { games } = require('./Arrays')


//Returns a boolean value: returns true if the array contains at least one element with the argument used. It works in the opposite way of the method 'every'
let containsAtLeastOne = false;

//Returns true
containsAtLeastOne = games.some(game => game.category === 'fps')
console.log('result 1: ', containsAtLeastOne)

//Returns false
containsAtLeastOne = games.some(game => game.category === 'any')
console.log('result 2: ', containsAtLeastOne)