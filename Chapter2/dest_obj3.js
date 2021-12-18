let book = { title: 'JavaScript本格入門', publish: '技術評論社', price: 3278 };
let { title: name, publish: company, price: cost } = book;
console.log(name); // JavaScript本格入門
console.log(company); // 技術評論社
console.log(cost); // 3278