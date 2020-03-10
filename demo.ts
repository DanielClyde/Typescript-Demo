import { Person, IAddress } from './person';


const people: Person[] = [];

let address: IAddress = {
  street1: '123 Park Ln',
  city: 'Logan',
  state: 'Utah',
  zip: 84341,
}

people.push(new Person('Danny', address, 22));

for (let p of people) {
  console.log(p.toString());
}

// custom types
type Truck = {
  towingCapacity: number;
  allWheel: boolean;
}
type Sedan = {
  gasMileage: number;
}



// type unions
let sedanOrTruck: Truck | Sedan;
let sedanAndTruck: Truck & Sedan;

type MyCustomType = 1 | 2;


let num: MyCustomType = 2;

let myCustomArray: [Person, string, number];
