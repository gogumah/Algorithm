let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let totalMinute = a * 60 + b + c; // 분의 형태로 바꿈
totalMinute %= 1440;

let hour = parseInt(totalMinute / 60);
let mins = totalMinute % 60;

console.log (hour + " " + mins);