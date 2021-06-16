const setup = () => {
	let persoon={
		voornaam : 'Jan',
		familienaam : 'Janssens',
		geboortedatum : new Date("1993-12-31"),
		kotAdres : {
		straat : "Kerkstraat 12",
		postcode : '8000',
		gemeente : "Brugge"
		},
		isIngeschreven : true,
		namenVanExen : ['Sofie', "Berta", 'Philip', "Albertoooo"],
		aantalAutos : 0
	   };
	   console.log( JSON.stringify( persoon ) );
	   /*
{"voornaam":"Jan","familienaam":"Janssens","geboortedatum":"1993-12-31T00:00:00.000Z","kotAdres":{"straat":"Kerkstraat 12",
"postcode":"8000","gemeente":"Brugge"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":0}

	   */
}

window.addEventListener("load", setup);