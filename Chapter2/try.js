var x = 80;
try {
  if(y >= 80) {
    console.log('よくできました');
  }
} catch(e) {
  console.log(e.message);
} finally {
  console.log('処理が完了いたしました');
}

/*
y is not defined
処理が完了いたしました
*/