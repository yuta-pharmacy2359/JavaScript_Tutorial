multiplication :
for(var i = 1; i < 10; i++) {
  for(var j = 1; j < 10; j++){
    if(i * j > 50) { break multiplication; }
    document.write(i + 'x' + j + ' = ' + i * j);
    document.write('<br />');
  }
  document.write('i = ' + i);
  document.write('<br />');
}

/*
1x1 = 1
1x2 = 2
1x3 = 3
1x4 = 4
1x5 = 5
1x6 = 6
1x7 = 7
1x8 = 8
1x9 = 9
i = 1
2x1 = 2
2x2 = 4
2x3 = 6
2x4 = 8
2x5 = 10
2x6 = 12
2x7 = 14
2x8 = 16
2x9 = 18
i = 2
3x1 = 3
3x2 = 6
3x3 = 9
3x4 = 12
3x5 = 15
3x6 = 18
3x7 = 21
3x8 = 24
3x9 = 27
i = 3
4x1 = 4
4x2 = 8
4x3 = 12
4x4 = 16
4x5 = 20
4x6 = 24
4x7 = 28
4x8 = 32
4x9 = 36
i = 4
5x1 = 5
5x2 = 10
5x3 = 15
5x4 = 20
5x5 = 25
5x6 = 30
5x7 = 35
5x8 = 40
5x9 = 45
i = 5
6x1 = 6
6x2 = 12
6x3 = 18
6x4 = 24
6x5 = 30
6x6 = 36
6x7 = 42
6x8 = 48
*/