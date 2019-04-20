/*
    
    ****** ADVANTAGES of WeakMaps ******
    Every time an object loses its reference the garbage collector will destroy it, and its data will destroyed too.
    
    1 - It's good to avoid memory leak, because it's always cleaning the memory.
    2 - It's possible to use private properties.

*/


function User(name) {
    this._name = name; //_name is private, using underscore.
}

User.prototype.getName = function() { 
    return this._name; 
}

const somePerson = new User('Anderson');
console.log('Acessing with get(): ', somePerson.getName());
console.log('it should be private: ', somePerson._name); //Ops! it's not safe, we're accessing a private property, and it should've returned as undefined

//Using WeakMaps to work around this problem:

const Person = (function() {
    const wmPrivateData = new WeakMap();

    //Constructor
    function Person(name) {
        wmPrivateData.set(this, { name }) //Receives itself as key (this) and name as value
    }
    //getter
    Person.prototype.getName = function() { 
        return wmPrivateData.get(this).name; //Uses itself as a key object (this) to access the property 'name' the map
    }    

    return Person;
}())

console.log('\n');
const Anderson = new Person('Anderson')
console.log('Acessing with get()', Anderson.getName());
console.log('Its private now: ', Anderson._name); //Ops! it's not safe, we're accessing a private property, and it should've returned as undefined