var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () =>{
  it('should generete correct message object', () => {
    // var res = generateMessage('Admin', 'Hello world!');
    //
    // expect(res).toInclude({
    //   from: 'Admin',
    //   text: 'Hello world!',
    // });
    //
    // expect(res.createAt).toBeA('number');

    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message).toInclude({from, text});
    expect(message.createAt).toBeA('number');
  });
});
