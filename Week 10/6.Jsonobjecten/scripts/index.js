const setup = () => {
	let jan = {}
	jan.voornaam = "Jan";
	jan.familienaam = "janssens";
	

	let mieke = {}
	mieke.voornaam = "Jan";
	mieke.familienaam = "janssens";
	let locatiemieke = {};
	locatiemieke.straat = "kerkstraat 12";
	locatiemieke.postcode = "8000";
	locatiemieke.gemeente = "Brugge";
	mieke.adres = locatiemieke;

	jan.adres = locatiemieke;

	
	let origneel = [];
	origneel.push(jan);
	origneel.push(mieke);
	let JsonText = JSON.stringify(origneel);
	let kopie = JSON.parse(JsonText);
	
}

window.addEventListener("load", setup);