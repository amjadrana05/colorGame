var square 			= document.querySelectorAll(".square"),
	displayColor 	= document.querySelector(".displayColor"),
	disColorWrap 	= document.querySelector(".displayColor-wrap"),
	resetBtn 		= document.querySelector("#reset"),
	message 		= document.querySelector("#message"),
	easyBtn 		= document.querySelector("#easy"),
	hardBtn 		= document.querySelector("#hard"),
	modeBtn 		= document.querySelectorAll(".mode"),
	totalColors 	= 6,
	colors 			= randomColor(totalColors);


// DisplayColor
displayColor.innerHTML = colors[Math.floor(Math.random() * totalColors)];


// All Square
for(var i=0; i<square.length; i++){
	square[i].style.background = colors[i];
	square[i].addEventListener("click", function(){
		var colorName = displayColor.innerHTML;
		// Check Color
		if(colorName === this.style.background){
			for(var i=0; i<square.length; i++){
				square[i].style.opacity = 1;
				square[i].style.background = this.style.background;
				square[i].style.cursor = "auto";
			}
			disColorWrap.style.background = this.style.background;
			this.style.cursor	= "auto";
			message.innerHTML 	= "CORRECT";
			resetBtn.innerHTML 	= "Try Again!";
		} else{
			this.style.opacity = 0;
			this.style.cursor = "auto";
			message.innerHTML = "TRY AGAIN";
		}
	});
}

// Random Color
function randomColor(colors){
	var randomColor = [];
	for(var i=0; i<colors; i++){
			r = Math.floor(Math.random() * 255),
			g = Math.floor(Math.random() * 255),
			b = Math.floor(Math.random() * 255),
			rgb = `rgb(${r}, ${g}, ${b})`;

		randomColor.push(rgb);
	}
	return randomColor;
}

// Reset Color
resetBtn.addEventListener("click", function(){
	resetBtn.innerHTML 	= "New Colors";
	message.innerHTML	= "";
	
	// New Color generate
	colors = randomColor(totalColors);

	// DisplayColor
	displayColor.innerHTML = colors[Math.floor(Math.random() * totalColors)];

	// Insert color into square
	for(var i=0; i<square.length; i++){
		square[i].style.background = colors[i];
	}
});

// Game Mode
for(var i=0; i<modeBtn.length; i++){
	modeBtn[i].addEventListener('click', function(){
		easyBtn.classList.remove("selected");
		hardBtn.classList.remove("selected");
		this.classList.add("selected");
		
		// Check game mode
		totalColors = (this.getAttribute("id") === "easy") ? 3 :  6

		// New Color generate
		colors = randomColor(totalColors);

		// DisplayColor
		displayColor.innerHTML = colors[Math.floor(Math.random() * totalColors)];

		// Insert color into square
		for(var i=0; i<square.length; i++){
			if(colors[i]){
				square[i].style.background = colors[i];
				square[i].style.display = "block";
			} else{
				square[i].style.display = "none";
			}
		}
	})
}
