//Fasten your belts, let's take a ride through our neighborhood

function* myGenerator() {
    console.log('I just crossed the Main Street');
    
    //Omg, we ran out of fuel, we have to stop here :(
    yield 'dead end!'; //this will stop the execution here.
    console.log('Im going toward the bakery');
}

//Generators are not executed immediately, instead, they return an iterable object.
myGenerator(); //This will do nothing.

//This will execute the generator
const ride = myGenerator();
const stoppingPoint = ride.next();

//value: has the value of our stoppingPoint (yield)
//done: indicates that our generator didn't execute ultil its end, we have one more line of code there: console.log('Im going toward the bakery')
console.log('Our stoppingPoint: ', stoppingPoint);


