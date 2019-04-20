/*
    Promises: They can finish with two states:
        - resolved
        - rejected
    
    Promises are often used to make http requests.
*/
const response = {
    data: {
        userName: 'Anderson Cruz',
        email: 'andersoncscz@hotmail.com',
        age: '29',
        alias: 'andersoncscz'
    }
}
const timeToWait = 2000 //2 seconds - to simulate a http request
const someTask = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const test = true;
            if (test)
                resolve(response);
            else
                reject('I failed, sorry!');
        }, timeToWait)
    });
}


someTask()
    .then(data => console.log('Some JSON: ', data))
    .catch(errors => console.log(errors))

