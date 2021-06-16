

const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let btnspin = document.querySelector(".buttonLink");
	btnspin.addEventListener("click",spin);
}
const urls = ["images/fruit01.jpg", "images/fruit02.jpg", "images/fruit03.jpg",
 			"images/fruit04.jpg", "images/fruit05.jpg"]
const spin = () => {
	randomizeImages();
	checkWinnings();
}
/*
const randomizeImages = () => {
	let imageElements = document.querySelectorAll(".slots img");
	for(let i = 0; i < imageElements.length; i++) {
		let imageElement = imageElements[i];
		let randomIndex = Math.floor(Math.random() * urls.length);
		setImageIndex(imageElement, randomIndex);
	}
}

const setImageIndex = (imageElement, index) => {
	let url = urls[index];
	imageElement.setAttribute("src", url);
} 

const checkWinnings = () => {
    let imageElements = document.querySelectorAll(".slots img");
    let firstUrl = imageElements[0].getAttribute("src");
    let isWinner = true;
    for (let i = 1; i < imageElements.length; i++) {
        let imageElement = imageElements[i];
        let url = imageElement.getAttribute("src");
        if (url != firstUrl) {
            isWinner = false;
            break;
        }
    }

    let messages = document.querySelectorAll(".message");
    for (let i=0;i<messages.length;i++) {
        let message = messages[i];
        message.classList.remove("show");
        if (isWinner === message.classList.contains("winner")) { // als er een winnaar is en dit bericht heeft class 'winner'
            message.classList.add("show"); // dan toon dit bericht (alle andere berichten waren al verborgen en blijven verborgen)
        }
    }
}*/
const randomizeImages = () => {
    let imageElements = document.querySelectorAll(".slots img");
    for(let i=0; i < imageElements.length; i++){
        let imageElement = imageElements[i];
        let randomIndex = Math.floor(Math.random() * urls.length);
        setImageAttribute(imageElement, randomIndex);
    }
}

const setImageAttribute = (imageElement, index) => {
    let url = urls[index];
    imageElement.setAttribute("src", url);
}

const checkWinnings = () => {
    let imageElements = document.querySelectorAll(".slots img");
    let firstUrl = imageElements[0].getAttribute("src");
    let isWinner = true;
    for(let i=0; i < imageElements.length; i++){
        let imageElement = imageElements[i];
        let url = imageElement.getAttribute("src");
        if(url != firstUrl){
            isWinner = false;
            break;
        }
    }
    let messages = document.querySelectorAll(".message");
    for(let i = 0; i <messages.length; i++){
        let message = messages[i];
        message.classList.remove("show");
        if(isWinner === message.classList.contains("winner")){
            message.classList.add("show");
        }
    }
}

window.addEventListener("load", setup);