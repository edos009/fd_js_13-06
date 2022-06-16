//! Пример записи через класс

"use strict";

class Woker {
  constructor(fname, sname, rate, days) {
    this.fname = fname;
    this.sname = sname;
    this.rate = rate;
    this.days = days;
  }

  get days() {
    return this._days;
  }

  set days(days) {
    if (typeof days !== "number") {
      throw new TypeError("Days must be number.");
    }

    if (days < 1 || days > DAYS_MAX) {
      throw new RangeError("Days must be 1.." + DAYS_MAX);
    }

    this._days = days;
  }

  getSalary = () => this.rate * this._days;
}

const woker = new Woker("Eduard", "Tiutiunnyk", 1000, 22);

console.log(woker.getSalary());

/*
class UserClass {
  constructor(fname, sname, age) {
    this.fname = fname;
    this.sname = sname;
    this.age = age;
  }
  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("Age must be number");
    }

    if (age < 0 || age > AGE_MAX) {
      throw new RangeError("Age must be 0..." + AGE_MAX);
    }

    return (this._age = age);
  }

  getFullname = () => `${this.fname} ${this.sname}`;

  isAdult = (adultAge = ADULT_AGE) => this._age >= adultAge;
}

const userNew = new UserClass("Eduard", "Tiutiunnyk", 26);

console.log(userNew.isAdult());
*/
