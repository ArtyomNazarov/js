var a = prompt("Введите 1 чтобы вывести текстовое поле, 2 чтобы вывести кнопку, 3 чтобы вывести круглешок с приколом");
var kolvo = prompt('Введите количество приколов');
kolvo = parseInt(kolvo);
if (a=='1')
for (var i=1;i<=kolvo;i++)
document.write('<br><input type="text">');
else if (a=='2')
for (var i=1;i<=kolvo;i++)
document.write('<br><input type="button">');
else if (a=='3')
for (var i=1;i<=kolvo;i++)
document.write('<br><input type="radio">');