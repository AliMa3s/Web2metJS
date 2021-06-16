const setup = () => {
	let array = [ {
		voornaam: "Jan",
		familienaam: "Janssens",
		adres: {
		straat: "Koekoekstraat 70",
		postcode: "9090",
		gemeente: "Melle"
		}
		}, {
		voornaam: "Mieke",
		familienaam: "Mickelson",
		adres: {
		straat: "Kerkstraat 12",
		postcode: "8000",
		gemeente: "Brugge"
		}
		} ];
		console.log(JSON.stringify(array));

		/*console
[{"voornaam":"Jan","familienaam":"Janssens","adres":{"straat":"Koekoekstraat 70","postcode":"9090",
"gemeente":"Melle"}},{"voornaam":"Mieke","familienaam":"Mickelson",
"adres":{"straat":"Kerkstraat 12","postcode":"8000","gemeente":"Brugge"}}]


		*/
}

window.addEventListener("load", setup);