const setup = () => {
	/*
	let links = document.querySelectorAll("#lstIngredients a");
	for(let i = 0; i < links.length; i++){
		let link = links[i];
		link.addEventListener("click", verwijder);
	}*/
	let links = document.querySelectorAll("#lstIngredients a");
	for(let i = 0; i < links.length; i++){
		let li = links[i];
		li.addEventListener("click", verwijder);
	}
}
/*
const verwijder = (event) => {
	let link = event.target;
	let li = link.parentNode;
	let ul = li.parentNode;
	ul.removeChild(li);
}
*/

const verwijder = (event) => {
	let link = event.target;
	let li = link.parentNode;
	let ul = li.parentNode;;
	ul.removeChild(li);
}
window.addEventListener("load", setup);