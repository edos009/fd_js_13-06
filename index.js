"use strict";

//Деструктуризация - способ создания переменных

const user = {
  id: 1,
  privateInfo: {
    fname: "Eduard",
    sname: "Tiutiunnyk",
    bday: {
      day: 27,
      month: 5,
      year: 1996,
    },
    children: ["q1", "q2", "q3"],
  },
  contactInfo: {
    phone: {
      work: "123-12-95",
      mobile: "007-007-007",
    },
    adress: {
      town: "ZP",
      street: "Gogola",
      house: 70,
    },
    mail: "eduardtiutiunnyk@gmail.com",
  },
  professional: "director",
  date: {
    day: 2,
    month: 9,
    year: 2016,
  },
};

// const prof = user.professional;
const { professional } = user;
console.log(professional);

// const sname = user.privateInfo.sname;
const {
  privateInfo: { sname, fname},
} = user;
console.log(sname, fname);

const {
  privateInfo: {bday:{day:bDay,month:bMonth, year:bYear}},
} = user;
console.log(bDay, bMonth, bYear);

const {
  date: {day:goDay,month:goMonth, year:goYear},
} = user;

console.log(goDay, goMonth, goYear);

const dayBDay = user.privateInfo.bday.day;
const monthBDay = user.privateInfo.bday.month;
