const setup = () => {
	
		

	let slider = document.getElementsByClassName("slider");
	for(let i = 0; i < slider.length; i++) {
		slider[i].addEventListener("change", update);
		slider[i].addEventListener("input",update);
	}
	update();
	let btnSave = document.querySelector("#btnSave");
	btnSave.addEventListener("click", saveSwatch);
}

const saveSwatch = () => {
	let div = document.createElement("div");
	div.classList.add("swatch");

	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	div.style.backgroundColor = 'rgb('+ red+ ','+ green+ ','+ blue+')';

	let color = {
		red: red,
		green : green,
		blue : blue
	};
	let colorText = JSON.stringify(color);
	div.setAttribute("data-color", colorText);

	input = document.createElement("input");
	input.setAttribute("type", "button");
	input.value="X";
	input.addEventListener("click", deleteSwatch);

	div.appendChild(input);

	div.addEventListener("click", setColorPickerFromswatch);

	let swatchComponents = document.querySelector("#swatchComponents");
	swatchComponents.appendChild(div);
}

const deleteSwatch = (event) => {
	let input = event.target;
	let div = input.parentNode;
	let section = div.parentNode;
	section.removeChild(div);
	event.stopPropagation();
}

const setColorPickerFromswatch = (event) => {
	let swatch = event.target;
	let JsoncolorText = swatch.getAttribute("data-color");
	let color = JSON.parse(JsoncolorText);


	let sldRed = document.querySelector("#sldRed");
	let sldGreen = document.querySelector("#sldGreen");
	let sldBlue = document.querySelector("#sldBlue");

	sldRed.value = color.red;
	sldGreen.value = color.green;
	sldBlue.value = color.blue;
	update();
}

const update = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML = red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;

	let swatch = document.querySelector("#swatch");
	swatch.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}
window.addEventListener("load", setup);