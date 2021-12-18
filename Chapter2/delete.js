var ary = ['Java', 'Ruby', 'pearl', 'JavaScript', 'PHP', 'Python'];
console.log(delete ary[2]); // true
console.log(ary); // 0: "Java", 1: "Ruby", 3: "JavaScript", 4: "PHP", 5: "Python"

var obj1 = {name: 'Tom', age: 24, sex: 'male', phone: '090-1234-5678'};
console.log(delete obj1.sex); // true
console.log(obj1.sex); // undefined

var obj2 = {name: 'Peter', age: 32, sex: 'male', phone: '090-2222-5555'};
console.log(delete obj2.sex); // true
console.log(obj2); // {name: 'Peter', age: 32, phone: '090-2222-5555'}

var data1 = 'Robert';
console.log(delete data1); // false
console.log(data1); // Robert

data2 = 'Jane';
console.log(delete data2); // true
// console.log(data2); // Uncaught ReferenceError: data2 is not defined at delete.js:19