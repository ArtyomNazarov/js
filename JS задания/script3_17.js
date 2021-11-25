alert ("до");
try
{
	prompt("введите число"); // опреатор с ошибкой
}
catch(e)
{
	alert("обработка ошибки: "+e.message);
}
alert("после");