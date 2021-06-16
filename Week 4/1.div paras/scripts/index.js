const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	/*let div = document.getElementById("clickme");
	div.addEventListener("click",klikondiv);

	let pa = document.getElementsByClassName("para");
	for(let i = 0; i < pa.length; i++){
		pa[i].addEventListener("click",para);
	}*/
	let div = document.getElementById("clickme");
	div.addEventListener("click", clickOnDiv);

	let pa = document.getElementsByClassName("para");
	for(let i = 0; i < pa.length; i++){
		pa[i].addEventListener("click",para);
	}
}
/*
const klikondiv = () => {
	console.log("klik on div");
}
const para = () => {
	console.log("klik op paragraaf");
}
*/

const clickOnDiv = () => {
	console.log("klik op div");
}

const para = () => {
	console.log("een klik op paragraaf");
}
window.addEventListener("load", setup);