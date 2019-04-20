const properties = new WeakMap()

class VideoGame {
    constructor(name, controllers, output, midia) {
        properties.set(this, {name, controllers, output, midia});
    }

    //The context of 'this' here, is the own object, that's why we're not using arrow functions.
    getProperties(propertyName) {
        return properties.get(this)[propertyName];
    }
}

const xbox360 = new VideoGame('XBOX360', 4, 'HDMI', 'DVD');

//This will print an undefined beacause the properties are protected, they're inside the weakmap.
console.log(xbox360.name);

//This will print the property that we passed, using a getter method to access the properties of the object.
console.log(xbox360.getProperties('name'));