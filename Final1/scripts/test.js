/**
 * testing keyboard inputs and js functionalities
 */
var gameInputKeys = [
	65, // a
	83, // s
	68, // d
	32, // space
	74, // j
	75, // k
	76  // l
]

// map linking keycodes to sound elements
var sounds = {
	65 : 'C', // do
	83 : 'D', // re
	68 : 'E', // mi
	32 : 'F', // fa
	74 : 'G', // sol
	75 : 'A', // ra
	76 : 'B'  // ti
}

// Add an event listener of DOMContentLoaded to the whole document and call an anonymous function.
// You can then wrap your code in that function's brackets
// and it will execute once loading is complete.
document.addEventListener('DOMContentLoaded', function () {
	
	var body = document.querySelector('body');
	body.onkeydown = handleKeyDown;
	body.onkeyup = handleKeyUp;
	body.onkeypress = handleKeyPress;
	var left = 33;
	for (var i = 0; i < 7; i++) {
		// initialize alignments of bars that will handle notes
		var id = "bar" + i;
		var d = document.getElementById(id);
		d.style.left = left + 'px';
	}
	
});

function playAudio(audio) {
	if (audio !== undefined) {
		audio.pause();
		audio.volume = 1.0;
		if (audio.readyState >= 2){
			audio.currentTime = 0;
			audio.play();
		}
	}
}

/*
 * Function that handles when user presses given key sets
 * if recognizable key is pressed, appropriate events should
 * trigger
 */
function handleKeyDown(event) {
	// recognized keys will trigger color change + note sound
	if(event.keyCode !== undefined) {
		var soundId = sounds[event.keyCode];
		console.log(soundId);
	
		if(soundId !== undefined) {
			var audio = document.getElementById(soundId);
			switch (event.keyCode) {
				case gameInputKeys[0]:
					console.log('a pressed');
					audio.pause();
					audio.volume = 1.0;
					if (audio.readyState >= 2){
						audio.currentTime = 0;
						audio.play();
					}
					var id = "bar" + 0;
					var d = document.getElementById(id);
					d.style.background = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,1))"
					break;
				case gameInputKeys[1]:
					console.log('s pressed');
					audio.pause();
					audio.volume = 1.0;
					if (audio.readyState >= 2){
						audio.currentTime = 0;
						audio.play();
					}
					var id = "bar" + 1;
					var d = document.getElementById(id);
					d.style.background = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,1))"
					break;
				case gameInputKeys[2]:
					console.log('d pressed');
					audio.pause();
					audio.volume = 1.0;
					if (audio.readyState >= 2){
						audio.currentTime = 0;
						audio.play();
					}
					var id = "bar" + 2;
					var d = document.getElementById(id);
					d.style.background = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,1))"
					break;
				case gameInputKeys[3]:
					console.log('space pressed');
					audio.pause();
					audio.volume = 1.0;
					if (audio.readyState >= 2){
						audio.currentTime = 0;
						audio.play();
					}
					var id = "bar" + 3;
					var d = document.getElementById(id);
					d.style.background = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,1))"
					break;
				case gameInputKeys[4]:
					console.log('j pressed');
					audio.pause();
					audio.volume = 1.0;
					if (audio.readyState >= 2){
						audio.currentTime = 0;
						audio.play();
					}
					var id = "bar" + 4;
					var d = document.getElementById(id);
					d.style.background = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,1))"
					break;
				case gameInputKeys[5]:
					console.log('k pressed');
					audio.pause();
					audio.volume = 1.0;
					if (audio.readyState >= 2) {
						audio.currentTime = 0;
						audio.play();
					}
					var id = "bar" + 5;
					var d = document.getElementById(id);
					d.style.background = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,1))"
					break;
				case gameInputKeys[6]:
					console.log('l pressed');
					audio.pause();
					audio.volume = 1.0;
					if (audio.readyState >= 2){
						audio.currentTime = 0;
						audio.play();
					}
					var id = "bar" + 6;
					var d = document.getElementById(id);
					d.style.background = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,1))"
					break;
				default:
					// ignore the rest
			}
		} else {
			console.log("this key is not mapped to a sound: code is", event.keyCode);
		}
	event.preventDefault();
	}
}

function handleKeyUp(event) {
	// revert images back to normal
	console.log('key is up');
	for (var i = 0; i < 7; i++) {
		var id = "bar" + i;
		var d = document.getElementById(id);
		d.style.background = ""
	}
}

function handleKeyPress(event) {
	// loop the handleKeyDown function
	console.log('key is pressed continuously');
}
