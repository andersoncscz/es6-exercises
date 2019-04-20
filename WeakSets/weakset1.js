/* 

    1 - WeakSet only accepts objects in the collection, primitive values will throw an error.
    2 - It's not iterable.
    3 - It's not possible to delete all elements at once, different from Set, which allow us call the clear method to do so.
    4 - Like weakmap, if an object in the collection there's no reference anymore, the garbage collector will get rid of it.

    *********** In other words, WeakSet is kind of useless ***********

*/