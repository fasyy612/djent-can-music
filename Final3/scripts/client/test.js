/**
 * testing keyboard inputs and js functionalities
 */
let gameInputKeys = [
	65, // a
	83, // s
	68, // d
	32, // space
	74, // j
	75, // k
	76  // l
]

// map linking keycodes to sound elements
let sounds = {
	65 : 'C', // do
	83 : 'D', // re
	68 : 'E', // mi
	32 : 'F', // fa
	74 : 'G', // sol
	75 : 'A', // ra
	76 : 'B'  // ti
}

let audio;

// Add an event listener of DOMContentLoaded to the whole document and call an anonymous function.
// You can then wrap your code in that function's brackets
// and it will execute once loading is complete.
document.addEventListener('DOMContentLoaded', function () {
	initializeEvents();
	initializeScreen();
	
	generateNotes(17);
	audio = new Audio('../sounds/acquired_taste.mp3');
});

/**
 * Sleep helper function 
 * @param time in milliseconds
 * @returns
 */
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Function that creates given number of note image elements
 * @param numOfNotes
 * @returns
 */
function generateNotes(numOfNotes) {
	// algorithm framework
	let endTime = 4905;
	let startTime = 525;
	let spacing = (endTime - startTime) / numOfNotes; // should be roughly 257ms
	let img;
	for (let i = 0; i < 3; i++) {
		// first five notes
		img = document.createElement('img');
		img.src = '../images/note.png';
		img.setAttribute("id", 'note' + i);
		img.style.position = 'absolute';
		img.setAttribute("width", '33');
		document.getElementById('bar'+ i).appendChild(img);
	}
	
	img = null;
	img = document.createElement('img');
	img.src = '../images/note.png';
	img.setAttribute("id", 'note' + 3);
	img.style.position = 'absolute';
	img.setAttribute("width", '33');
	document.getElementById('bar'+ 5).appendChild(img);
	
	img = null;
	img = document.createElement('img');
	img.src = '../images/note.png';
	img.setAttribute("id", 'note' + 4);
	img.style.position = 'absolute';
	img.setAttribute("width", '33');
	document.getElementById('bar'+ 3).appendChild(img);
	
	img = null;
	for (let i = 5; i < 8; i++) {
		// first five notes
		img = document.createElement('img');
		img.src = '../images/note.png';
		img.setAttribute("id", 'note' + i);
		img.style.position = 'absolute';
		img.setAttribute("width", '33');
		document.getElementById('bar'+ (i - 5)).appendChild(img);
	}
	
	img = null;
	img = document.createElement('img');
	img.src = '../images/note.png';
	img.setAttribute("id", 'note' + 8);
	img.style.position = 'absolute';
	img.setAttribute("width", '33');
	document.getElementById('bar'+ 4).appendChild(img);
	
	img = null;
	img = document.createElement('img');
	img.src = '../images/note.png';
	img.setAttribute("id", 'note' + 9);
	img.style.position = 'absolute';
	img.setAttribute("width", '33');
	document.getElementById('bar'+ 3).appendChild(img);
	
	img = null;
	for (let i = 10; i < 17; i++) {
		// first five notes
		img = document.createElement('img');
		img.src = '../images/note.png';
		img.setAttribute("id", 'note' + i);
		img.style.position = 'absolute';
		img.setAttribute("width", '33');
		document.getElementById('bar'+ (i - 10)).appendChild(img);
	}
}

function repositionNotes() {
	let elem;
	for (let i = 0; i < 17; i++) {
		elem = document.getElementById('note' + i);
		elem.style.top = 0 + 'px';
	}	
}

/**
 * Function that 'drops' the note image from top to bottom of
 * bar image. velocity of the animation is determined by the 'pos'
 * increment value
 * @param index id of note to animate
 * @returns
 */
function dropNoteAnimation(index) {
	let d = new Date();
	let n = d.getTime();
	
	let velocity = 2;
	
	let elem = document.getElementById('note' + index);
	let pos = 0;
	let id = setInterval(frame, 10);
	function frame() {
		if (pos === 398) {
			// end of animation around 6s for full bar
			let ds = new Date();
			let p = ds.getTime(); 
			console.log(p - n); // roughly 2000ms
		}
		
		if (pos === 410) {
			// end of animation
		} else {
			pos += velocity;
			elem.style.top = pos + 'px';
		}
	}
}

function startCount() {
	timer = setInterval(count,1000);
}

function count() {
	var time_shown = $("#timer").text();
        var time_chunks = time_shown.split(":");
        var hour, mins, secs;
        mins=Number(time_chunks[0]);
        secs=Number(time_chunks[1]);
        secs++;
            if (secs==60) {
                secs = 0;
                mins=mins + 1;
               } 
              if (mins==60) {
                mins=0;
                hour=hour + 1;
              }
        $("#timer").text(plz(mins) + ":" + plz(secs));
}

function plz(digit){
    var zpad = digit + '';
    if (digit < 10) {
        zpad = "0" + zpad;
    }
    return zpad;
}

function initializeEvents() {
	let body = document.querySelector('body');
	body.onkeydown = EventHandler.handleKeyDown;
	body.onkeyup = EventHandler.handleKeyUp;
	body.onkeypress = EventHandler.handleKeyPress;
	document.getElementById('playButton').addEventListener("click", function() {
		setTimeout(function() {		let down = 3;
		let countdown = setInterval(function() {
			console.log(down);
			down--;
			if(down === 0) {
				clearInterval(countdown);
			}
		}, 1000);}, 3000);
		let counter = 0;
		let noteInterval = setInterval(function(){
			dropNoteAnimation(counter);
		    counter++;
		    if(counter === 17) {
		        //clearInterval(i);
		    	counter = 0;
		    }
		}, 254);
		setTimeout(function() {	audio.play(); }, 1500);

		startCount();
	});
	document.getElementById('quitButton').addEventListener("click", ButtonHandler.handleQuitButton);
	document.getElementById('switchKeys').addEventListener("click", ButtonHandler.handleSwitchKeysButton);
	document.getElementById('changeColor').addEventListener("click", ButtonHandler.handleChangeColorButton);
	document.getElementById('screenshot').addEventListener("click", ButtonHandler.handleScreenshotButton);
	document.getElementById('options').addEventListener("click", ButtonHandler.handleOptionsButton);
	
	EventHandler.appendMessage('Loading the song...');
	EventHandler.appendMessage('Downloading song...');
}

function initializeScreen() {
	let left = 36;
	let temp = 0;
	for (let i = 0; i < 7; i++) {
		// initialize alignments of bars that will handle notes
		let id = "bar" + i;
		let d = document.getElementById(id);
		d.style.left = left + 'px';
		}
	
	left = -195;
	let top = 415;
	for (let i = 0; i < 4; i++) {
		// place the buttons
		let id = "key" + i;
		let d = document.getElementById(id);
		d.style.left = left + 'px';
		d.style.top = top + 'px';
		left += 33;
		top -= 29;
	}
	
	top = 328 - 45;
	for (let i = 4; i < 7; i++) {
		let id = "key" + i;
		let d = document.getElementById(id);
		d.style.left = left + 'px';
		d.style.top = top + 'px';
		left += 33;
		top -= 45;
	}
}