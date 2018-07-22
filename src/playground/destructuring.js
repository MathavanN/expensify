
console.log("destructuring");

const person = {
    name: 'Mathavan',
    age: 29,
    location: {
        city: 'Singapore',
        temp: 70
    }
};
// const name = person.name;
// const age = person.age;

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}..`);

const {city, temp: temprature} = person.location;

console.log(`It's ${temprature} in ${city}.`)


const book = {
title: "Ego is the Enemy",
author: "Ryan Holiday",
publisher: {
    name: "Penguin"
}
};

console.log("publisherName"); //Penguin //Self-Published

const {name: publisherName = "Self-Published"} = book.publisher;
console.log(publisherName);


//Array Destructuring

//const address = ['03-3009', 'BLK 587', 'Ang Mo kio Ave 03', 'Singapore', '560587'];
const address = ['03-3009', 'BLK 587', 'Ang Mo kio Ave 03', 'Singapore'];
const [houseNo, blockNo, street, yourCity, postalCode = '566666'] = address;


console.log(`your are in ${blockNo}, ${houseNo}, ${street}, ${yourCity}, ${postalCode}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [CoffeeItem, sPrice, mPrice, lPrice ] = item;

console.log(`A medium ${CoffeeItem} costs ${mPrice}`);