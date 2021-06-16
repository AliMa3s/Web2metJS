
const personen = [ ];

const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let btnBewaar = document.getElementById("btnBewaar");
	btnBewaar.addEventListener("click",bewaarPersoon)
	vulMetDemoData();
	toonAllePersonen();
}

const bewaarPersoon = () => {
	let persoon ={};
	let txtVoornaam = document.querySelector("#txtVoornaam");
	persoon.voornaam = txtVoornaam.value;

	let txtFamilienaam = document.querySelector("#txtFamilienaam");
	persoon.familienaam = txtFamilienaam.value;

	let txtEmail = document.querySelector("#txtEmail");
	persoon.email = txtEmail.value;

	let txtGeboortedatum = document.querySelector("#txtGeboortedatum");
	let geborteAlsTekst = txtGeboortedatum.value;
	persoon.geboortedatum = new Date(geborteAlsTekst);

	const txtAantalkinderen = document.querySelector("#txtAantalKinderen");
	let txtAantalKind = txtAantalkinderen.value;
	persoon.aantalKinderen = Number.parseInt(txtAantalKind, 10);

	//add to end of array
	personen.push(persoon);
	toonAllePersonen();
	txtVoornaam.value="";
	txtFamilienaam.value="";
	txtEmail.value="";
	txtGeboortedatum.value="";
	txtAantalkinderen.value="";

}
const vulMetDemoData = () => {
	let jan = {
		voornaam:"jan",
		familienaam: "jansens",
		geboortedatum : new Date("2010-10-15"),
		email: "jan@example.com",
		aantalKinderen: 0
	};
	personen.push(jan);
	let mieke = {
		voornaam:"mieke",
		familienaam: "miekensen",
		geboortedatum : new Date("1980-10-06"),
		email: "mieke@example.com",
		aantalKinderen: 1
	};
	personen.push(mieke);
	//or in one go
	personen.push({
		voornaam:"Piet",
		familienaam: "Pirat",
		geboortedatum : new Date("2000-1-7"),
		email: "Piet@example.com",
		aantalKinderen: 2
	});
}
const ToonPersoon = (persoon) => {
	const datumTekst = persoon.geboortedatum.toISOString().substr(0,10);
}
const toonAllePersonen = () => {
	for(let i = 0; i<personen.length; i++){
		let persoon = personen[i];
		ToonPersoon(persoon);
	}
}
window.addEventListener("load", setup);