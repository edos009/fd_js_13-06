/**
 *
 * @param {string} fname
 * @param {string} lname
 * @param {number} age
 * @param {boolean} isMale
 * @param {string} email
 * @param {boolean} [isSubscribed=false]
 */
function User(fname, lname, age, isMale, email, isSubscribed = false) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

function UserPrototype() {
  this.fullName = function () {
    return `${this.fname} ${this.lname}`;
  };
}

User.prototype = new UserPrototype();

function createUsers(amount = 1) {
  const arrUsers = [];

  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Eduard${i}`,
      `Tiutiunnyk${i}`,
      Math.ceil(Math.random() * (60 - 20) + 20),
      Math.random() > 0.5,
      `email${i}@gmail.com`
    );
    arrUsers.push(user);
  }

  return arrUsers;
}

const users = createUsers(20);
console.table(users);

//Массив пользователей с полными именами

const arrFullName = users.map(function (user) {
  return user.fullName();
});
console.table(arrFullName);

//Массив пользователей, которые старше 40

const arrUsersOverForty = users.filter(function (user) {
  return user.age > AGE_LIMIT;
});

console.table(arrUsersOverForty);

//Модифицировать сабсрайп пользователей - рандомно

users.forEach(function (user) {
  user.isSubscribed = Math.random() > 0.5;
});

console.table(users);

//Получить массив эмейлов пользователей до 40 лет женского пола с подпиской

const womenOverFortyIsSubscribeEmail = users
  .filter(function (user) {
    return user.age > AGE_LIMIT;
  })
  .filter(function (user) {
    return !user.isMale;
  })
  .filter(function (user) {
    return user.isSubscribed;
  })
  .map(function (user) {
    return user.email;
  });

console.table(womenOverFortyIsSubscribeEmail);

// Получить массив полных имен пользователей мужчин которые младше 40 и без подписки

const fullNameMenLeesFortyIsNotSubscribe = users
  .filter(function (user) {
    return user.age < AGE_LIMIT;
  })
  .filter(function (user) {
    return user.isMale;
  })
  .filter(function (user) {
    return !user.isSubscribed;
  })
  .map(function (user) {
    return user.fullName();
  })

console.table(fullNameMenLeesFortyIsNotSubscribe);

// Получить сумму возрастов

const sumAgeMenLeesFortyIsNotSubscribe = users
  .filter(function (user) {
    return user.age < AGE_LIMIT;
  })
  .filter(function (user) {
    return user.isMale;
  })
  .filter(function (user) {
    return !user.isSubscribed;
  })
  .reduce(function (initialV, user) {
    return initialV + user.age
  }, 0);

console.table(sumAgeMenLeesFortyIsNotSubscribe);