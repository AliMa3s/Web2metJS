const setup = () => {
	let btnToon = document.querySelector("#btnToon");
	btnToon.addEventListener("click",Toon);
}

const Toon = () => {
	let chkIsRoker = document.querySelector("#chkIsRoker");
	if(chkIsRoker.checked){
		console.log("is roker");
	}else{
		console.log("is geen roker");
	}
	let rbtMoedertaal = document.querySelector("input[name='rbtMoedertaal']:checked");
	console.log("Moedertaal is " + rbtMoedertaal.value);

	let fvtBLand = document.querySelector("#selFavorieteBuurland option:checked");
	console.log("Favorite buurland is " + fvtBLand.text);

	let text = "Bestelling bestaat uit ";
	let optionBestelling = document.querySelector("#selBestelling option:checked");
	for(let i = 0; i < optionBestelling.length; i++){
		text+= optionBestelling[i].text+" ";
	}
	console.log(text);
}
/*
const Toon = () => {
	let chkRoker = document.querySelector("#chkIsRoker");
	if(chkRoker.checked){
		console.log("is roker");
	}else{
		console.log("is niet roker");
	}
	let radiobutton = document.querySelector("input[name='rbtMoedertaal']:checked");
	console.log("modertaal is " + radiobutton);
	let rbtMoedertaal = document.querySelector("input[name='rbtMoedertaal']:checked");
	console.log("Moedertaal is " + rbtMoedertaal);

	let fvtBLand = document.querySelector("#selFavorieteBuurland option:checked");
	console.log("favorite buurland is "+ fvtBLand);

	let text = "Bestelling bestaat uit";
	let optionBestelling = document.querySelector("#selBestelling option:checked");
	for(let i = 0; i < optionBestelling.length; i++){
		text += optionBestelling[i].text +" ";
	}
}*/
window.addEventListener("load", setup);