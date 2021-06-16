const setup = () => {
	/*let slider = document.getElementsByClassName("slider");
	for(let i = 0; i < slider.length; i++) {
		slider[i].addEventListener("change",update);
		slider[i].addEventListener("input", update);
	}
	update();*/
	let slider = document.getElementsByClassName("slider");
	for(let i = 0; i < slider.length; i++) {
		slider[i].addEventListener("change", update);
		slider[i].addEventListener("input", update);
	}
	update();
}
/*
const update = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML = red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;

	let swatch = document.querySelector("#swatch"); //QuerySelector use for id #
	swatch.style.backgroundColor = "rgba(" +red+ "," + green + "," + blue +")";

}
*/

const update = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML = red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;

	let swatch = document.querySelector("#swatch");
	swatch.style.backgroundColor = "rgba(" +red+","+ green+","+ blue+")";
}

window.addEventListener("load", setup);