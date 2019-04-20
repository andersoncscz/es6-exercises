const devTeam = {
    
    amount: 3,
    maturity: 'high',
    seniorDeveloper: 'Mat',
    plainDeveloper: 'Josh',
    juniorDeveloper: 'Taylor',

    //Access and override the iteration function. In this case, we're going to iterate only in names.
    [Symbol.iterator]: function*() {
        //each yield will be a iteration
        yield this.seniorDeveloper;
        yield this.plainDeveloper;
        yield this.juniorDeveloper;
    }
}

for (const developer of devTeam) {
    console.log(developer)
}

console.log(``)

const businessTeam = {
    quantidade: 2,
    director: 'Marcelo',
    vice: 'Guilherme',
    [Symbol.iterator]: function*() {
        yield this.director;
        yield this.vice;
    }
}

const teams = {
    devTeam,
    businessTeam,
    //Overrides the iterator
    [Symbol.iterator]: function*() {
        //yield* delegate
        yield* devTeam;
        yield* businessTeam;
    }
}

for (const member of teams) {
    console.log(member)
}