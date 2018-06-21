// Jan 1st 1970 00:00:00 am
// 0
// -1000 un segundo antes
// 1000 un segundo después

// var date = new Date();
// console.log(date.getMonth());

// http://momentjs.com
var moment = require('moment');
var date = moment();

console.log(date.format());
// 2018-06-21T07:44:22-05:00

date.add(1, 'year').subtract(1, 'months');
console.log(date.format('MMM Do, YYYY'));
// May 21st, 2019

// 10:35 am
// 6:01 am
console.log(date.format('LT'));
// 7:49 AM
console.log(date.format('h:mm a'));
// 7:49 am
