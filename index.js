"use strict";

/*
Способы объявления Класса
1. class Name{};
2. const Name = class{};
3. function f(){
  return class{};
}
*/

//ООП
/*
1. Инкапсуляция
2. Наследования
3. Полиморфизм
*/

/*
class User {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this._isBane = false;
  }

  get isBane() {
    return this._isBane;
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }

  static isUser(obj) {
    return obj instanceof User;
  }
}

class Moderator extends User {
  constructor(fname, lname, permision) {
    super(fname, lname);
    this.permision = permision;
  }
}

class Admin extends Moderator {
  constructor(fname, lname, permision) {
    super(fname, lname, permision);
  }

  ban(object) {
    if (User.isUser(object) === false) {
      throw new TypeError("Must be user");
    }
    object._isBane = true;
  }

  unBan(object) {
    if (User.isUser(object) === false) {
      throw new TypeError("Must be user");
    }
    object._isBane = false;
  }
}

class Editor extends Moderator {
  constructor(fname, lname, permision, email) {
    super(fname, lname, permision);
    this.email = email;
  }
}

const user = new User("Eduard", "Tiutiunnyk");
const admin = new Admin("Admin", "Admin", true);
*/

class Squirrel {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  jump() {
    return `${this.name} is jumping`;
  }

  static isSquirrel(obj) {
    return obj instanceof Squirrel;
  }
}

class FlySquirrel extends Squirrel {
  constructor(name, color, maxDistance) {
    super(name, color);
    this.maxDistance = maxDistance;
  }

  get maxDistance() {
    return this._maxDistance;
  }

  set maxDistance(maxDistance) {
    if (typeof maxDistance !== "number") {
      throw new TypeError("Max distance must be number");
    }

    if (maxDistance < 0 || maxDistance > 90) {
      throw new RangeError("Max distance must be 0..500");
    }

    this._maxDistance = maxDistance;
  }

  fly(dist) {
    return dist <= this.maxDistance
      ? `${this.name} is flying ${dist}`
      : `${this.name} is not flying ${dist}`;
  }
}

class MagicSquirrel extends FlySquirrel {
  constructor(name, color, maxDistance, arrSongs) {
    super(name, color, maxDistance);
    this.arrSongs = arrSongs;
  }

  songSing() {
    this.arrSongs.forEach((song) => {
      console.log(`${this.name} is singing ${song}`);
    });
  }
}

const squirel = new Squirrel("Curl", "Orange");
const flySquirrel = new FlySquirrel("Bob", "Red", 80);
const magicSquirrel = new MagicSquirrel("Sam", "Brown", 70, [
  "song1",
  "song2",
  "song3",
]);

magicSquirrel.songSing();
