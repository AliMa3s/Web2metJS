const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	/*let paragraaf = document.getElementById("txtOutput");
	paragraaf.textContent="Hello world -> Hello Javascript";*/

/*	let para = document.getElementsByTagName("p");
	for(let i = 0; i < para.length; i++){
		para[i].textContent= "Hello world -> changed with getelementByTagNmae(p) and then a forloop.length,para[i].textContent";
	}*/
	let para = document.getElementsByTagName("p");
	for(let i = 0; i < para.length; i++){
		para[i].textContent ="bro i changed all the para to this message by tagnameelement it again";
	}
}
window.addEventListener("load", setup);