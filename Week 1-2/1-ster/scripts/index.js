const aantal = 5;
const setup = () => {
	ster();
}

const ster =()=>{
	let ster ="";
	for (let i = 0; i < aantal; i++) {
		for(let j = 0; j < aantal; j++){
			ster+="*-*";
		}	
		ster+="\n";
	}
	return console.log(ster);
	
}

const sterr = () => {
	let ster = "";
	for(let i = 0; i < aantal; i++) {
		for(let j = 0; j < aantal; j++){
			ster += "*";
		}
		ster+="\n";
	}
	return console.log(ster);
}
window.addEventListener('load', setup);