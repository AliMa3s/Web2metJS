const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
/*	let div = document.getElementById("clickme");
	div.addEventListener("mouseenter", mouseEnter);
	div.addEventListener("mouseleave", mouseLeave);
	div.addEventListener("mousemove", mouseMove); */

	let div = document.getElementById("clickme");
	div.addEventListener("mousemove", mouseMove);
	div.addEventListener("mouseleave", MouseLeave);
	div.addEventListener("mouseenter", MouseEnter);
}
/*
const mouseMove = () => {
	console.log("Mouse is moving");
}
const mouseLeave = () => {
	console.log("Mouse is leaving");
}
const mouseEnter = () => {
	console.log("Mouse Entered the scene");
}
*/

const mouseMove = () => {
	console.log("Mouse is moving");
}

const MouseLeave = () => {
	console.log("Mouse is leaving");
}

const MouseEnter = () => {
	console.log("Mouse Entered");
}

window.addEventListener("load", setup);