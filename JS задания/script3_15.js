var counter = prompt("Введите число");
var factorial = 1;
document.write("Факториал числа :" + counter + "! = ");
do {
	if ( counter == 0) {
		factorial = 1;
		break;
	}
	factorial = factorial * counter;
	counter = counter - 1;
}
while (counter > 0);
document.write(factorial);