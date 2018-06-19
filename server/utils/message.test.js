var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {

  it('should genereate correct location object', () => {
    var from = 'Jose';
    var latitude = 1;
    var longitude = 2;
    var url = "https://www.google.com/maps?q=1,2";
    var message = generateLocationMessage(from, latitude, longitude);

    // expect(message).toInclude({
    //   from: 'Jose',
    //   url: url
    // });
    expect(message).toInclude({from, url});
    expect(message.createAt).toBeA('number');
  });
});
