const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let btnBereken = document.getElementsByClassName("btnHerbereken")[0];
	btnBereken.addEventListener("click",update);

	update();
}
/*
const update = () => {
	
	let txtBtw = document.getElementsByClassName("btw");
	let txtAantal = document.getElementsByClassName("aantal");
	let txtprijzen = document.getElementsByClassName("prijs");
	let txtsubtotal= document.getElementsByClassName("subtotaal");
	let totaal = 0;

	for(let i=0; i < txtBtw.length; i++) {
		let aantal = parseFloat(txtAantal[i].value, 10);
		let btw = parseFloat(txtBtw[i].textContent, 10);
		let prijs = parseFloat(txtprijzen[i].textContent, 10);

		let subtotaal = aantal * prijs * (1+(btw/100));
		totaal += subtotaal;

		txtsubtotal[i].textContent= subtotaal.toFixed(2)+" Eur";
	}
	let txtTotaal = document.getElementsByClassName("totaal")[0];
	txtTotaal.textContent= totaal.toFixed(2)+ " Eur";
}
*/
const update = () => {
	let txtbtw = document.getElementsByClassName("btw");
	let txtAantal = document.getElementsByClassName("aantal");
	let txtprijzen = document.getElementsByClassName("prijs");
	let txtsubtotal = document.getElementsByClassName("subtotaal");
	let totaal = 0;
	for(let i = 0; i< txtbtw.length; i++){
		let aantal = parseFloat(txtAantal[i].value, 10);
		let btw = parseFloat(txtbtw[i].textContent,10);
		let prijs = parseFloat(txtprijzen[i].textContent, 10);

		let subtotaal = aantal * prijs *(1+(btw/100));
		totaal += subtotaal;

		txtsubtotal[i].textContent = subtotaal.toFixed(2)+" Eur";
	}
	let txtTotaal = document.getElementsByClassName("totaal")[0];
	txtTotaal.textContent = totaal.toFixed(2)+ " Eur";
}


window.addEventListener("load", setup);