export class Person {
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

export interface IAddress {
  street1: string;
  street2?: string;
  apt?: string;
  city: string;
  state: string;
  zip: number;
}
