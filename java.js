var clr1 = document.getElementById('color1');
var clr2 = document.getElementById('color2');
var body = document.querySelector('body');
var button = document.getElementById("helo");

function changeclr()
{
	body.style.background =
	 "linear-gradient(to right," 
	 + clr1.value 
	 +"," 
	 + clr2.value
	 +")";
}

button.addEventListener("click", changeclr);