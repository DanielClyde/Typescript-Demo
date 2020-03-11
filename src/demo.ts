class Person {
  private _name: string;
  private _address: IAddress;
  private _age: number;

  constructor(n: string, addr: IAddress, age: number) {
    this._name = n;
    this._address = addr;
    this._age = age;
  }

  public get name() { return this._name; }
  public get address() { return this._address; }
  public get age() { return this._age; }

  public set name(val: string) { this._name = val; }
  public set address(val: IAddress) { this._address = val; }
  public set age(val: number) { this._age = val; }

  public toString(): string {
    return `${this.name} is ${this.age} years old.`;
  }

}

interface IAddress {
  street1: string;
  street2?: string;
  apt?: string;
  city: string;
  state: string;
  zip: number;
}


const people: Person[] = [];

let address: IAddress = {
  street1: '123 Park Ln',
  city: 'Logan',
  state: 'Utah',
  zip: 84341,
}

people.push(new Person('Danny', address, 22));
people.push(new Person('Joe', address, 45));
people.push(new Person('John', address, 32));

for (let p of people) {
  let h: HTMLHeadingElement = document.createElement('h1');
  h.innerText = p.toString();
  h.style.background = 'darkblue';
  h.style.color = 'white';
  h.style.textAlign = 'center';
  document.body.append(h);
}

console.log('All People', people);

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
