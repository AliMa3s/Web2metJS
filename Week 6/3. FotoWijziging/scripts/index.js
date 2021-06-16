const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
/*	
	let btnChange = document.getElementById("btnChange");
	btnChange.addEventListener("click",change);*/

	let btnchange = document.getElementById("btnChange");
	btnChange.addEventListener("click", change);
}
/*
const change = () => {
	let txtInput = document.getElementById('txtInput');
	let url = txtInput.value;

	let image = document.getElementById('imgOutput')
	image.setAttribute("src", url);

}
*/

const change = () => {
	let txtInput = document.getElementById('txtInput');
	let url = txtInput.value;

	let imageOutput = document.getElementById('imgOutput');
	imageOutput.setAttribute("src", url)
}
window.addEventListener("load", setup);