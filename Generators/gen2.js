/*
    Now that we know how generators work, let's track theur execution
    If you already used async / await, you noticed that the behavior is very similar, where we await a http request finishes to go to the next line of code.

    We can use generators when we need a function which has to be paused in some point, regardless be a http request.
*/

function* myGenerator() {
    console.log('Execution 1');
    yield 'Stop for Execution 1';
    
    console.log('Execution 2');
    yield 'Stop for Execution 2';
    
    console.log('Execution 3');
    yield 'Stop for Execution 3';
    
    console.log('Execution 4');
    yield 'Dead End!';            
}


const track = myGenerator();
for (let nextStep of track) {
    console.log(nextStep);    
}