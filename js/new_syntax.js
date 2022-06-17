//! Пример записи через класс

"use strict";
/*
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
*/

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

/*
class Auto {
  #model;
  constructor(model, ownWeight) {
    this.#model = model;
    this.ownWeight = ownWeight;
  }

  get ownWeight() {
    return this._ownWeight;
  }

  set ownWeight(ownWeight) {
    if (typeof ownWeight !== "number") {
      throw new TypeError("Own weight must be number.");
    }

    if (ownWeight < OWN_WEIGHT_MIN || ownWeight > OWN_WEIGHT_MAX) {
      throw new RangeError(
        "Own weight must be " + OWN_WEIGHT_MIN + ".." + OWN_WEIGHT_MAX
      );
    }

    this._ownWeight = ownWeight;
  }

  getFullWeight(objFuel) {
    if (Fuel.isFuel(objFuel) === false) {
      throw new TypeError("Object fuel must be object");
    }
    return this._ownWeight + objFuel.weight;
  }
}

const auto = new Auto('bmw', 1700)

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }

  get volume() {
    return this._volume;
  }

  set volume(volume) {
    if (typeof volume !== "number") {
      throw new TypeError("Volume must be number.");
    }

    if (volume < 0 || volume > VOLUME_MAX) {
      throw new RangeError("Volume must be 0.." + VOLUME_MAX);
    }

    this._volume = volume;
  }

  get density() {
    return this._density;
  }

  set density(density) {
    if (typeof density !== "number") {
      throw new TypeError("Density must be number.");
    }

    if (density < DENSITY_MIN || density > DENSITY_MAX) {
      throw new RangeError(
        "Volume must be " + DENSITY_MIN + ".." + DENSITY_MAX
      );
    }

    this._density = density;
  }

  get weight() {
    return this._volume * this._density;
  }

  static isFuel(obj) {
    return obj instanceof Fuel;
  }
}

const fuel = new Fuel(30, 0.7)

console.log(auto.getFullWeight(fuel));
*/
