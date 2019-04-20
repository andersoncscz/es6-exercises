const { games } = require('../Arrays/arrays')

//Iterates in a collection in a very simple way: for(value, iterable) {...}
for (game of games) {
    console.log(game)
}