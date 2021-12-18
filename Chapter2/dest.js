let data = ["りんご", "ごりら", "らっぱ", "ぱせり", "りす", "すいか", "からす", "すもも"];
let [w0, w1, w2, w3, w4, w5, w6, w7] = data;
console.log(w0); // りんご
console.log(w2); // らっぱ
console.log(w4); // りす
console.log(w6); // からす

let data2 = ["りんご", "ごりら", "らっぱ", "ぱせり", "りす", "すいか", "からす", "すもも"];
let [w10, w11, w12, ...other] = data2;
console.log(w0); // りんご
console.log(w1); // ごりら
console.log(w2); // らっぱ
console.log(other); // ['ぱせり', 'りす', 'すいか', 'からす', 'すもも']