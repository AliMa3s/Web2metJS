const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let div = document.getElementById("para");
	div.addEventListener("click", change);
}
const change = () => {
	let p = document.getElementById("para");
	p.style.backgroundColor = "red";
}
window.addEventListener("load", setup);