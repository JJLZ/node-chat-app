// Jan 1st 1970 00:00:00 am
// 0
// -1000 un segundo antes
// 1000 un segundo después

// var date = new Date();
// console.log(date);
// // 2018-06-21T13:00:10.923Z
// console.log(date.getMonth());
// // 5

// http://momentjs.com
// var moment = require('moment');
// var date = moment();
//
// console.log(date.format());
// // 2018-06-21T07:44:22-05:00
//
// date.add(1, 'year').subtract(1, 'months');
// console.log(date.format('MMM Do, YYYY'));
// // May 21st, 2019
//
// // 10:35 am
// // 6:01 am
// console.log(date.format('LT'));
// // 7:49 AM
// console.log(date.format('h:mm a'));
// 7:49 am

var moment = require('moment');
var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format());
console.log(date.format('h:mm a'));
// 1969-12-31T18:00:01-06:00
// 6:00 pm

// var someTimestamp = moment().valueOf();
console.log(moment().valueOf());
// 1529586663568
console.log(new Date().getTime());
// 1529586663568
