const setup = () => {
	/*
	let jan = {}
	jan.voornaam = "Jan";
	jan.familienaam = "janssens";
	let locatiejan = {};
	locatiejan.straat = "koekstraat 70";
	locatiejan.postcode = "7000";
	locatiejan.gemeente = "Mele";
	jan.adres = locatiejan;
*/
// making an object literal from above
	let jan = {
		voornaam: "Jan",
		familienaam: "Janssens",
		adres: {
			straat : "koekstraat 70",
			postcode : "7000",
			gemeente : "Mele"
		}
	};
/*
	let mieke = {}
	mieke.voornaam = "Jan";
	mieke.familienaam = "janssens";
	let locatiemieke = {};
	locatiemieke.straat = "kerkstraat 12";
	locatiemieke.postcode = "8000";
	locatiemieke.gemeente = "Brugge";
	mieke.adres = locatiemieke;
	*/
	let mieke = {
		voornaam: "mieke",
		familienaam: "mickelson",
		adres: {
			straat : "kerkstraat 12",
			postcode : "8000",
			gemeente : "Brugge"
		}
	};

	//array Literal first index is jan, 2nd mieke
	let array = [jan, mieke];
	// U CAN ALSO MAKE DIRECTLY OBJECT IN ARRAY LITERAL
	let array1 = [{
		voornaam: "Jan",
		familienaam: "Janssens",
		adres: {
			straat : "koekstraat 70",
			postcode : "7000",
			gemeente : "Mele"
		}
	},{
		voornaam: "mieke",
		familienaam: "mickelson",
		adres: {
		straat : "kerkstraat 12",
		postcode : "8000",
		gemeente : "Brugge"
		} 
	}];
	console.log(array[0]);
}

window.addEventListener("load", setup);