"use strict";
class Person {
    constructor(n, addr, age) {
        this._name = n;
        this._address = addr;
        this._age = age;
    }
    get name() { return this._name; }
    get address() { return this._address; }
    get age() { return this._age; }
    set name(val) { this._name = val; }
    set address(val) { this._address = val; }
    set age(val) { this._age = val; }
    toString() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const people = [];
let address = {
    street1: '123 Park Ln',
    city: 'Logan',
    state: 'Utah',
    zip: 84341,
};
people.push(new Person('Danny', address, 22));
people.push(new Person('Joe', address, 45));
people.push(new Person('John', address, 32));
for (let p of people) {
    let h = document.createElement('h1');
    h.innerText = p.toString();
    h.style.background = 'darkblue';
    h.style.color = 'white';
    h.style.textAlign = 'center';
    document.body.append(h);
}
console.log('All People', people);
// type unions
let sedanOrTruck;
let sedanAndTruck;
let num = 2;
let myCustomArray;
