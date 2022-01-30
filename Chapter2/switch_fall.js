var station = '東小金井';
switch(station) {
  case '武蔵小金井' :
  case '東小金井' :
  case '武蔵境' :
    console.log('特別快速が通過します。');
    break;
  case '国分寺' :
  case '三鷹' :
    console.log('特別快速が停車します。');
    break;
}

// 特別快速が通過します。