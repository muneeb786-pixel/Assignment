// initializing the object that we defined 
var vehicle = {
    car: {
        'Tesla Model S': 'An electric luxury sedan that boasts impressive performance, technology, and range',
        'Ford Mustang': 'A classic American muscle car known for its iconic design and powerful engine.',
        'Honda Civic': 'A versatile and affordable compact car that offers good fuel economy and a comfortable ride.',
        'Mercedes-Benz S-Class': 'A luxury sedan that sets the standard for sophistication, comfort, and advanced technology.'
    }
};
// traversing to object
for (var key in vehicle.car) {
    // checking that if the object exist as the property
    if (Object.prototype.hasOwnProperty.call(vehicle.car, key)) {
        var value = vehicle.car[key];
        //   displaying 
        console.log(key, value);
    }
}
