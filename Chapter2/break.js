for(var i = 1, j = 1; i < 100; i++, j++) {
  console.log(i + 'の2乗は' + i * j + 'です。');
  if(i * j > 100) { break; }
}

/*
1の2乗は1です。
2の2乗は4です。
3の2乗は9です。
4の2乗は16です。
5の2乗は25です。
6の2乗は36です。
7の2乗は49です。
8の2乗は64です。
9の2乗は81です。
10の2乗は100です。
11の2乗は121です。
*/