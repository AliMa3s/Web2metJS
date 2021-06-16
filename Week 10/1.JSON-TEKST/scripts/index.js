const setup = () => {
	let p1 = {
		naam:"jan janssens",
		gemeente:"Melle",
	};
	let p2 = {
		naam: "mieke",
		gemeente:"Bruhhe",
	};
	let personen = [];
	personen.push(p1);
	personen.push(p2);
	console.log(JSON.stringify(personen));
	/*Result
	[{"naam":"jan janssens","gemeente":"Melle"},{"naam":"mieke","gemeente":"Bruhhe"}]
	*/
}

window.addEventListener("load", setup);