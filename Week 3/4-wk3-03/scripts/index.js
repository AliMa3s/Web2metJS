const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	
	let btnCopy = document.getElementById("btnCopy");
	btnCopy.addEventListener("click", copy);

}

const copy = () => {
	let txtInput = document.getElementById("txtInput");
	let tekst = txtInput.value;
	let txtOutput = document.getElementById("txtOutput");
	txtOutput.textContent = tekst;
}
window.addEventListener("load", setup);