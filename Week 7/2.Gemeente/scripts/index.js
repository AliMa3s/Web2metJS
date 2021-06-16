const setup = () => {
	/*
	let gemeenten = [];
	let stoppen = false;

	while(!stoppen){
		let input = window.prompt("Geef gemente in(of 'stop' om te stopen)");
		stoppen=(input==null || input.trim().toLowerCase() == "stop");
		if(!stoppen){
			gemeenten.push(input);
		}
	}
	gemeenten.sort(compare);
	voegGemeentenToe(gemeenten);
	*/
	let gemeenten = [];
	let stoppen = false;
	while(!stoppen){
		let input = window.prompt("Geef gemeente 'stop' om te stoppen");
		stoppen = (input ==null || input.trim().toLowerCase()=="stop");
		if(!stoppen){
			gemeenten.push(input);
		}
	}
	gemeenten.sort(compare);
	voegGemeenteToe(gemeenten);
}
/*
const voegGemeentenToe = (gemeente) => {
	let selGemeenten = document.querySelector("#selGemeente");
	for(let i = 0; i < gemeente.length; i++){
		selGemeenten.insertAdjacentHTML("beforeend", `<option>${gemeente[i]}</option>`);
	}
}
const compare = (a,b) => {
	return a.localeCompare(b);
}
*/
const voegGemeenteToe = (gemeente) => {
	let selGemeente = document.querySelector("#selGemeente");
	for(let i = 0; i < gemeente.length; i++){
		selGemeente.insertAdjacentHTML("beforeend", `<option>${gemeente[i]}</option>`);
	}
}
const compare = (a,b) => {
	return a.localeCompare(b);
}
window.addEventListener("load", setup);