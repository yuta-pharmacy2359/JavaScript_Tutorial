var x = 3;
var y = x;
x = 10;
console.log(x); // 10
console.log(y); // 3

var data1 = [ 3, 6, 9 ];
var data2 = data1;
data1[2] = 12;
console.log(data1); // [3, 6, 12]
console.log(data2); // [3, 6, 12]

const TAX = 1.08;
// TAX = 1.1;  // equal.js:14 Uncaught TypeError: Assignment to constant variable.

const data = ["リンゴ", "ゴリラ", "ラッパ"];
// data = ["りんご", "ごりら", "らっぱ"]; // equal.js:17 Uncaught TypeError: Assignment to constant variable.
data[1] = "ゴジラ";
console.log(data); // ['リンゴ', 'ゴジラ', 'ラッパ']