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

  removeUser(id) {

    // var user = this.users.filter((user) => user.id === id)[0];
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    };

    return user; // return user that was removed
  }

  getUser(id) {
    var user = this.users.filter((user) => user.id === id)[0];
    return user;
  }

  getUserList(room) {
    // var users = this.users.filter((user) => {
    //   return user.room === room;
    // })
    var users = this.users.filter((user) => user.room === room);
    // var namesArray = users.map((user) => {
    //   return user.name
    // });
    var namesArray = users.map((user) => user.name);

    return namesArray;
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
