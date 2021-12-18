let book = { title: 'JavaScript本格入門', publish: '技術評論社', price: 3278, };
let { price, publish, memo = 'なし' } = book;
console.log(price); // 3278
console.log(publish); // 技術評論社
console.log(memo); // なし
// console.log(title); // エラー