const setup = () => {
	let origineel = {
		naam : "Jan",
		geboortedatum : new Date("1993-12-31")
		};
		console.log(origineel.geboortedatum);
	let tekst = JSON.stringify(origineel);
	let kopie = JSON.parse(tekst); // this copy is an string and its a problem u have to make it to object
}

window.addEventListener("load", setup);