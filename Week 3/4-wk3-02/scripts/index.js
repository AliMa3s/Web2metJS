const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let btnWijzig = document.getElementById("btnChange");
	btnWijzig.addEventListener("click", Wijzig);

	let btnRename = document.getElementById("btnRename");
	btnRename.addEventListener("click", Rename);

	let btnGo = document.getElementById("btnGoaway");
	btnGo.addEventListener("click", Goaway);

}


const Wijzig = () => {
	let txtWijzig = document.getElementById("txtOutput");
	txtWijzig.textContent = "Gewijzigd";
}

const Rename = () => {
	let rename = document.getElementById("txtOutput");
	rename.textContent="naam verandered";
}

const Goaway = () => {
	let goaway = document.getElementById("txtOutput");
	goaway.textContent="GaWeg!";
}
window.addEventListener("load", setup);