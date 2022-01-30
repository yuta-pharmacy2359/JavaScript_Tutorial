var x = 106;
try{
  if(x > 100) {throw new Error('このテストの満点は100点です。');}
  if(x >= 90) {
    console.log('大変よくできました');
  } else if(x >= 80) {
    console.log('よくできました');
  } else if(x >= 70) {
    console.log('がんばりました');
  } else if(x >= 60) {
    console.log('もう少しです');
  } else {
    console.log('がんばりましょう');
  }
} catch(e) {
  console.log(e.message);
}