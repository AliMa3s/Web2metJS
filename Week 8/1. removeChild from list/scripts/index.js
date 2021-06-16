const setup = () => {
	/*
	let lis = document.querySelectorAll("#lstIngredients");
	for(let i = 0; i < lis.length; i++){
		let li = lis[i];
		li.addEventListener("click",verwijder);
	}*/
	let lis = document.querySelectorAll("#lstIngredients");
	for(let i = 0; i < lis.length; i++){
		let list = lis[i];
		list.addEventListener("click", verwijder);
	}
}
/*
const verwijder = (event) => {
	let list = event.target;
	let ulist = document.querySelector("#lstIngredients");
	ulist.removeChild(list);
}*/

const verwijder = (event) => {
	let ulist = event.target;
	let lijst = document.querySelector("#lstIngredients");
	lijst.removeChild(ulist);
}
window.addEventListener("load", setup);