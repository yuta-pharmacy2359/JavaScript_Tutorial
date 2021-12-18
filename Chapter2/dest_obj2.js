let book = { title: 'JavaScript本格入門', publish: '技術評論社', price: 3278, other: { keyword: 'JavaScript', memo: 'JS学習の王道'}};
let { title, other, other: {keyword}} = book;
console.log(title); // JavaScript本格入門
console.log(other); // keyword: "JavaScript", memo: "JS学習の王道"
console.log(keyword); // JavaScript