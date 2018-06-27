[{
  id: 'fjdlkruoienvjeiru',
  name: 'Jose',
  room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList

class Users {

  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);

    return user;
  }
}

module.exports = {Users};

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }
//
// var me = new Person('Jose', 39);
// var description = me.getUserDescription();
// console.log(description);
