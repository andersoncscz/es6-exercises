//handling nesting executions
const timeToWait = 2000 //2 seconds - to simulate a http request
const someTask = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('It works'), timeToWait);
    })
}

console.log('\n')
someTask()
    .then(console.log('1º nested execution done!\n'))
    .then(console.log('2º nested execution done!\n'))
    .then(() => {
        console.log('3º nested execution will throw an error!\n')
        throw new Error('Oops! something went wrong in 3º nested execution.')
    })        
    .catch(error => console.log(error))

