const setup = () => {
	let jan = {}
	jan.voornaam = "Jan";
	jan.familienaam = "janssens";
	let locatiejan = {};
	locatiejan.straat = "koekstraat 70";
	locatiejan.postcode = "7000";
	locatiejan.gemeente = "Mele";
	jan.adres = locatiejan;

	let mieke = {}
	mieke.voornaam = "Jan";
	mieke.familienaam = "janssens";
	let locatiemieke = {};
	locatiemieke.straat = "kerkstraat 12";
	locatiemieke.postcode = "8000";
	locatiemieke.gemeente = "Brugge";
	mieke.adres = locatiemieke;

	let array = [];
	array.push(jan);
	array.push(mieke);
	console.log(array);
}

window.addEventListener("load", setup);