//Object literal array
let personen = [
	{
		voornaam : "jan",
		familienaam: "janssens",
		leeftijd: 29
	},{
		voornaam : "mieke",
		familienaam: "miekensen",
		leeftijd: 25
	},{
		voornaam : "Donald",
		familienaam: "Duck",
		leeftijd: 36
	},{
		voornaam : "Piet",
		familienaam: "Piraat",
		leeftijd: 54
	}
];
const setup = () => {
	
	let select = document.querySelector(".person-list");
	for(let i = 0; i < personen.length; i++){
		let persoon = personen[i];
		let optionText = `<option data-index="${i}">${persoon.voornaam} (${persoon.leeftijd})</option>`;
		select.insertAdjacentHTML("beforeend", optionText);
	}
	select.addEventListener("change", selecteerPersoon);
}
/*
const selecteerPersoon = () => {
	let select = document.querySelector(".person-list");
	let selectedIndex = select.selectedIndex;
	
	let option = select.options[selectedIndex];
	//console.log(option.textContent);
	let dataIndexText = option.getAttribute("data-index");
	let dataIndex = Number.parseInt(dataIndexText, 10);
	let persoon = personen[dataIndex];
	//console.log(`${persoon.voornaam}`);
	let livoorNaam = document.querySelector(".firstname");
	livoorNaam.textContent=persoon.voornaam;
	let liFNaam = document.querySelector(".lastname");
	liFNaam.textContent=persoon.familienaam;
	//two line code in one line
	document.querySelector(".age").textContent=persoon.leeftijd;
}*/
const selecteerPersoon = () => {
	let select = document.querySelector(".person-list");
	let selectedIndex = select.selectedIndex;

	let option = select.options[selectedIndex];
	let dataIndexText = option.getAttribute("data-index");
	let dataIndex = Number.parseInt(dataIndexText, 10);
	let persoon = personen[dataIndex];
	let livoornaam = document.querySelector(".firstname");
	livoornaam.textContent=persoon.voornaam;
	let liFnaam = document.querySelector(".lastname");
	liFnaam.textContent=persoon.familienaam;
	document.querySelector(".age").textContent=persoon.leeftijd;
}
window.addEventListener("load", setup);