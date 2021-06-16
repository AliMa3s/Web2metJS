const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let div = document.getElementById(".myDiv");
	div.addEventListener("click",maakGeel);

	//let div = document.getElementById("myDiv");
	div.addEventListener("mouseenter",makeRed);
}

const maakGeel = () => {
	let div = document.getElementById("myDiv");
	div.style.backgroundColor="yellow";
}


const makeRed = () => {
	let div = document.getElementById("myDiv");
	div.style.backgroundColor="red";
}
window.addEventListener("load", setup);