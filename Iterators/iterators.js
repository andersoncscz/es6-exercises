//Collection of witches
const { witches } = require('../Arrays/arrays')

//Function responsible for select a house for a witch
const hatSelector = witch => {
    const houses = ['Grifinoria', 'Sonserina', 'Corvinal', 'Lufa-Lufa']
    const house = houses[Math.floor(Math.random() * houses.length)]

    console.log(`Witch: ${witch} - House: ${house}`)
}


//Creates an iterator from the witches' collection
const iterator = witches[Symbol.iterator](); //This is the iterable. It has to implement a Symbol.iterator in its key property

//Takes the first iterator object from the witches' collection, using the method next()
let next = iterator.next(); //Iterator

//For each witch, calls the hatSelector function in order to raffle a house for this witch
console.log('\n\n************* Using iterator *************\n\n')
do {
    let witch = next.value //Takes the witch from the object next.
    hatSelector(witch) //Raffles a house for this witch.
    next = iterator.next() //Takes the next iterator object.
} while (!next.done) //Repeat the process while there are witches to be iterated.

//Finish the process when there are no more witches to be iterated





//Now using for...of
console.log('\n************* Using for...of *************\n')
for (const witch of witches) {
    hatSelector(witch)
}