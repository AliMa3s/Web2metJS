const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let txtInput = document.querySelector("#txtInput");
	let btnVoeg = document.querySelector("#btnAdd");
	let wis = document.querySelector("#btnClear");

	btnVoeg.addEventListener("click",voegToe);
	wis.addEventListener("click",wisAlles);

	let lstIngridients = document.querySelector("#lstIngredients");
	lstIngridients.addEventListener("click", makeRed);
}
/*
const voegToe = () => {
	let txtInput = document.querySelector("#txtInput");
	let ingredient = txtInput.value;
	let lstIngridients = document.querySelector("#lstIngredients");
	lstIngridients.innerHTML += `<li>${ingredient}</li>`;
}
const wisAlles = () => {
	let lstIngridients = document.querySelector("#lstIngredients");
	lstIngridients.innerHTML="";
}
const makeRed = (event) => {
	if(event.currentTarget != event.target){
		let li = event.target;
		li.classList.add("belangrijk");
	}else{

	}
}
*/
const voegToe = () => {
	let txtInput = document.querySelector("#txtInput");
	let ingredient = txtInput.value;
	let lstIngridients = document.querySelector("#lstIngredients");
	lstIngridients.innerHTML +=`<li>${ingredient}</li>`;
}
const wisAlles = () => {
	let lstIngredients = document.querySelector("#lstIngredients");
	lstIngredients.innerHTML="";
}

const makeRed = (event) => {
	if(event.currentTarget != event.target){
		let li = event.target;
		li.classList.add("belangrijk");
	}else{

	}
}
window.addEventListener("load", setup);