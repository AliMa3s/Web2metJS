const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
/*	let btnAdd = document.querySelector("#btnAdd");
	btnAdd.addEventListener("click",voegToe);

	let btnRemove = document.querySelector("#btnClear");
	btnRemove.addEventListener("click",wisAlles);

	let list = document.querySelectorAll("#lstIngredients li");
	for(let i = 0; i < list.length; i++) {
		list[i].addEventListener("click",makeOrange);
	}*/
	let btnAdd = document.querySelector("#btnAdd");
	btnAdd.addEventListener("click", voegToe);

	let btnWis = document.querySelector("#btnClear");
	btnWis.addEventListener("click", wissen);

	let list = document.querySelectorAll("#lstIngredients li");
	for(let i = 0; i < list.length; i++) {
		list[i].addEventListener("click",maakRed);
	}
}
/*
const voegToe = () => {
	let txtInput = document.querySelector("#txtInput");
	let ingredient = txtInput.value;
	let ingredients = document.querySelector("#lstIngredients");
	ingredients.insertAdjacentHTML("beforeend", `<li>${ingredient}</li>`); //Till here adds to the list

	
}
const wisAlles = () => {
	let lstingredients = document.querySelector("#lstIngredients");
	lstingredients.innerHTML ="";
}

const makeOrange = (event) => {
	let li = event.target;
	li.classList.add("belangrijk");
}
*/
const wissen = () => {
	let lstIngredients = document.querySelector("#lstIngredients");
	lstIngredients.innerHTML="";
}
const voegToe = () => {
	let txtInput = document.querySelector("#txtInput");
	let ingredient = txtInput.value;
	let ingredients = document.querySelector("#lstIngredients");
	ingredients.insertAdjacentHTML("beforeend", `<li>${ingredient}</li>`);
}
const maakRed = (event) => {
	let li = event.target;
	li.classList.add("belangrijk");
}
window.addEventListener("load", setup);