const { games } = require('../Arrays/arrays')

//Iterates in properties of an object
for (game of games) {
    
    console.log(game)
    
    for (property in game)
        console.log(`Property: ${property} - Value: ${game[property]}`)

    console.log('-----------------------------------------------------------------')
}