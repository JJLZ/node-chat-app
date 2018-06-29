const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should remove a user', () => {
    // var res = users.removeUser('1');
    //
    // expect(res).toEqual(
    //   {id: '1', name: 'Mike', room: 'Node Course'}
    // );

    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);

    // expect(users.users).toEqual([
    //   {
    //     id: '2',
    //     name: 'Jen',
    //     room: 'React Course'
    //   }, {
    //     id: '3',
    //     name: 'Julie',
    //     room: 'Node Course'
    //   }
    // ]);

    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    // var user = users.removeUser('6');
    //
    // expect(user).toNotExist();
    //
    // expect(users.users).toEqual([
    //   {
    //     id: '1',
    //     name: 'Mike',
    //     room: 'Node Course'
    //   }, {
    //     id: '2',
    //     name: 'Jen',
    //     room: 'React Course'
    //   }, {
    //     id: '3',
    //     name: 'Julie',
    //     room: 'Node Course'
    //   }
    // ]);

    var userId = '7';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '1';
    var user = users.getUser(userId);

    // expect(user).toEqual({
    //     id: '1',
    //     name: 'Mike',
    //     room: 'Node Course'
    //   });

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    // var user = users.getUser('7');
    var userId = '7';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 'dfjdlkfj',
      name: 'Jose',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for the node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for the react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
