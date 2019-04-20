//Maps in Javascript works like a HashMap, with keys and values. Objects work like maps because objects have key and values for these keys
const map = new Map()
const obj = {}
func = () => {}

//Method set() -> inset values in the map, using a key and a value for this key
console.log('\n*************************** Method set() *************************** \n')
map.set('STRING', 'Im a string')
map.set('STRING2', 'Im a string 2')
map.set(obj, 'Im an object')
map.set(func, 'Im a function')

//Method get() -> returns values in the map using a key to get a value for this key
console.log('\n*************************** Method get() *************************** \n')
console.log(map.get('STRING'))
console.log(map.get('STRING2'))
console.log(map.get(obj))
console.log(map.get(func))

//Method has() -> Verifies if an specfic key exist in the map.
console.log('\n*************************** Method has() *************************** \n')
console.log('Exists: ',map.has(obj))
console.log('Exists: ',map.has(func))
console.log('Not Exists: ',map.has('Anderson Cruz'))

//Method delete() -> Deletes an element of a specfic key
console.log('\n*************************** Method delete() *************************** \n')
map.delete('STRING2')
console.log('Exists ? ',map.has('STRING2'))

//Property size -> returns the size of the map
console.log('\n*************************** Property size *************************** \n')
console.log('Size of the map',map.size)

//It's possible to iterate between its keys using for...of
console.log('\n*************************** Iteration *************************** \n')
for (const key of map.keys()) {
    console.log('Key: ', key)
}

//It's possible to iterate between the values of each key.
console.log('\n')
for (const value of map.values()) {
    console.log('Value: ', value)
}
console.log('\n')
//It's possible to iterate between the entries (keys and values).
for (const entry of map.entries()) {
    console.log('Entry: ', entry)
}
//Or just doing:
console.log('\n')
for (const entry of map) {
    console.log('Entry: ', entry)
}


//Method clear() -> Deletes all elements of the map
console.log('\n*************************** Method clear() *************************** \n')
map.clear()
console.log('Size of the map after clearing',map.size)

