let moment = require('moment');

let date = moment();
date.add(1, 'years').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

let date2 = moment();
console.log(date2.format('h:mm a'));

let createdAt = 1234;
let sometimestanp = moment().valueOf();
console.log(sometimestanp);
let date3 = moment(createdAt);
console.log(date3.format('MMM Do, YYYY'));