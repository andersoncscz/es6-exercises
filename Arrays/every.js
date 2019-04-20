const { games } = require('./Arrays')


//Returns a boolean value: returns true only if every elements in array have the category equals to the category passed as argument, in this case, I'm using 'fps' as category, and an mixed array, so it's going to return false
const containsOnlyThisCategory = games.every(game => game.category === 'fps')
console.log('result: ', containsOnlyThisCategory)