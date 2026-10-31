let currentAudio;
const sounds = ["applause" , "boo" , "gasp" , "tada" , "victory" , "wrong"];
const btns = document.getElementById("buttons");
sounds.forEach(function (sound) {
	const button = document.createElement("button");
	button.className = "btn";
	button.textContent = sound;
	btns.appendChild(button);

	button.addEventListener("click", () => {
		currentAudio = new Audio("sounds/" + sound + ".mp3");
		currentAudio.play();
	});
});

const stop = document.querySelector(".stop");


stop.addEventListener("click", () => {
	if (currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
});	

