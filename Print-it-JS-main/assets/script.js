const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


let currentIndex = 0;
const arrowLleft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");

function displayImage(index) {
	const imageElement = document.getElementById("bannerimg").setAttribute("src", "./assets/images/slideshow/" + slides[index].image);
	const textElement = document.getElementById("phrase").innerHTML = slides[index].tagLine;

	switch (index) {
		case 0:
			dot1.classList.add("dot_selected");
			dot2.classList.remove("dot_selected");
			dot3.classList.remove("dot_selected");
			dot4.classList.remove("dot_selected");
			break;
		case 1:
			dot1.classList.remove("dot_selected");
			dot2.classList.add("dot_selected");
			dot3.classList.remove("dot_selected");
			dot4.classList.remove("dot_selected");
			break;
		case 2:
			dot1.classList.remove("dot_selected");
			dot2.classList.remove("dot_selected");
			dot3.classList.add("dot_selected");
			dot4.classList.remove("dot_selected");
			break;
		case 3:
			dot1.classList.remove("dot_selected");
			dot2.classList.remove("dot_selected");
			dot3.classList.remove("dot_selected");
			dot4.classList.add("dot_selected");
			break;
		default:
			console.log(`BUG`);
	}

};

arrowLleft.addEventListener("click", () => {
	if (currentIndex > 0) {                             //it means we are not at the first slide, so we move one slide backward
		currentIndex = currentIndex - 1;                // Move to the previous slide
	} else {
		currentIndex = slides.length - 1;               // Loop back to the last slide?
	}
	displayImage(currentIndex);
});


arrowRight.addEventListener("click", () => {
	if (currentIndex < slides.length - 1) {        // Checks if currentIndex is less than the last slide index (slides.length - 1)
		currentIndex = currentIndex + 1;           // Move to the next slide
	} else {                                       // If yes, move one step forward (currentIndex + 1)
		currentIndex = 0                           // If no (already at the last slide), loop back to the first slide (currentIndex = 0)
	}
	displayImage(currentIndex);
});

dot1.addEventListener("click", () => {
	currentIndex = 0;
	displayImage(currentIndex);
});

dot2.addEventListener("click", () => {
	currentIndex = 1;
	displayImage(currentIndex);
});

dot3.addEventListener("click", () => {
	currentIndex = 2;
	displayImage(currentIndex);
});

dot4.addEventListener("click", () => {
	currentIndex = 3;
	displayImage(currentIndex);
});

displayImage(currentIndex);













