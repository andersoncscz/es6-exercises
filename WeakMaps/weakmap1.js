/*
    ********************** Weakmaps are almosts never used, beacause maps is much better **********************

    WeakMaps works like maps, using key and value, but with some diferences:
    
    1 - They only accept an object as a key, and the references of theses objects are weakly kept. 
        In other words they're not predictable to be collected by the garbage collector, case there's no any other reference to the object in memory.
        Once the object is removed from memory, the weakmap doesn't protect this reference, it let the garbage collector get rid of it, and we lost our element

        Methods:
            get()
            set()
            delete()
            has()
*/


const weakMap = new WeakMap();
let element1 = { name: 'Anderson' }
let element2 = { name: 'Patricia' }

//Adding the elements in the weakmap
weakMap.set(element1, 'element 1')
weakMap.set(element2, 'element 2')


//Printing the elements before removing
console.log(weakMap.get(element1));
console.log(weakMap.get(element2));

//Setting null for an element, which is inside the weakmap
element2 = null;

//Setting a timeout (4 seconds) for the garbage collector does its job. We'll see that element 2 will be undefined
setTimeout(() => console.log(weakMap.get(element2)), 4000)