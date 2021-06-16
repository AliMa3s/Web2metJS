const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	/*let btnGo = document.getElementById("btnGo");
	btnGo.addEventListener("click",addTafel);*/
	let btnGo = document.getElementById("btnGo");
	btnGo.addEventListener("click", addtable);
}
/*
const addTafel = () => {
	let txtGetal = document.getElementById("txtGetal");
	let getal = parseInt(txtGetal.value, 10);
	if(isNaN(getal)){
		window.alert("Bro put a number");
	}else{
		InsertTafelHtml(getal);
	}
	txtGetal.value ="";
}

const InsertTafelHtml = (getal) => {
	let htmlHeader = `<h1 class = "heading">Tafel van ${getal}</h1>`;
	let htmlInhoud = "";
	for(let i = 1; i <=10; i++) {
		let product = i * getal;
		let htmlText = `<p>${getal} x ${i} = ${product}</p>`;
		htmlInhoud += htmlText;
	}
	let htmlTabel = `<div class="tafel">${htmlHeader}${htmlInhoud}</div>`;
	let divtabels = document.getElementById("divTafels");
	divtabels.innerHTML+=htmlTabel;
}
*/
const addtable = () => {
	let txtInput = document.getElementById("txtGetal");
	let getal = parseInt(txtInput.value, 10);
	if(isNaN(getal)){
		window.alert("Bro put a number");
	}else{
		Inserttable(getal);
	}
	txtInput.value="";
}
const Inserttable = (getal) => {
	let htmlHeader = `<h1 class ="heading">Tafel van ${getal}</h1>`;
	let htmlItems ="";

	for(let i = 1; i<=10; i++){
		let product = i * getal;
		let htmlText = `<p>${getal} x ${i} = ${product}</p>`;
		htmlItems+= htmlText;
	}
	let htmlTable = `<div class="tafel">${htmlHeader}${htmlItems}</div>`;
	let divtables = document.getElementById("divTafels");
	divtables.innerHTML+=htmlTable;

}
window.addEventListener("load", setup);