const setup = () => {
/*
	let btnadd = document.querySelector("#btnAdd");
	btnadd.addEventListener("click",add);

	let links = document.querySelectorAll("#lstIngredients");
	for(let i = 0; i < links.length; i++){
		let link = links[i];
		link.addEventListener("click", verwijder);
	}*/
	let btnadd = document.querySelector("#btnAdd");
	btnadd.addEventListener("click", add);

	let links = document.querySelectorAll("#lstIngredients");
	for(let i = 0; i < links.length; i++){
		let link = links[i];
		link.addEventListener("click", verwijder);
	}
}
/*
const verwijder = (event) => {
	let link = event.target;
	let li = link.parentNode;
	let ul = li.parentNode;
	ul.removeChild(li);
	//to not go to up page if paragraaf are alot
	event.preventDefault();
}

const add = () => {
	let ingredient = document.querySelector("#txtInput").value;
	let ul = document.querySelector("#lstIngredients");
	ul.insertAdjacentHTML("beforeend", `<li>${ingredient} <a href="#">verwijder</a></li>`);

	let nieuweListItem = ul.lastElementChild;
	let nieuwelink = document.querySelector("#lstIngredients");

	nieuwelink.addEventListener("click", verwijder);
}*/

const add = () => {
	let ingredient = document.querySelector("#txtInput").value;
	let ul = document.querySelector("#lstIngredients");
	ul.insertAdjacentHTML("beforeend", `<li>${ingredient} <a href="#">verwijder</a></li>`);

	let newListItem = ul.lastElementChild;
	let newlink = document.querySelector("#lstIngredients");
	newlink.addEventListener("click", verwijder);
}
const verwijder = (event) => {
	let link = event.target;
	let li = link.parentNode;
	let ul = li.parentNode;
	ul.removeChild(li);

	event.preventDefault();
}

window.addEventListener("load", setup);