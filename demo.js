"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var people = [];
var address = {
    street1: '123 Park Ln',
    city: 'Logan',
    state: 'Utah',
    zip: 84341,
};
people.push(new person_1.Person('Danny', address, 22));
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var p = people_1[_i];
    console.log(p.toString());
}
// type unions
var sedanOrTruck;
var sedanAndTruck;
var num = 2;
var myCustomArray;
