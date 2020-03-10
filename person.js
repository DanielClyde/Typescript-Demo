"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(n, addr, age) {
        this._name = n;
        this._address = addr;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () { return this._name; },
        set: function (val) { this._name = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "address", {
        get: function () { return this._address; },
        set: function (val) { this._address = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () { return this._age; },
        set: function (val) { this._age = val; },
        enumerable: true,
        configurable: true
    });
    Person.prototype.toString = function () {
        return this.name + " is " + this.age + " years old.";
    };
    return Person;
}());
exports.Person = Person;
