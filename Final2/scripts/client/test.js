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

// Add an event listener of DOMContentLoaded to the whole document and call an anonymous function.
// You can then wrap your code in that function's brackets
// and it will execute once loading is complete.
document.addEventListener('DOMContentLoaded', function () {
	initializeEvents();
	initializeScreen();
	
	generateNotes(17);
	
	let audio = new Audio('../sounds/test.ogg');

	for(let i = 0; i < 17; i++) {
		sleep(1000).then(() => {
			dropNoteAnimation(i);
		});
	}

    // play the generated ogg file
	audio.play();
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
	
	let img2 = document.createElement('img');
	img2.src = '../images/note.png';
	img2.setAttribute("id", 'note' + 4);
	img2.style.position = 'absolute';
	img2.setAttribute("width", '33');
	document.getElementById('bar'+ 3).appendChild(img2);
	
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
	
	let img3 = document.createElement('img');
	img3.src = '../images/note.png';
	img3.setAttribute("id", 'note' + 8);
	img3.style.position = 'absolute';
	img3.setAttribute("width", '33');
	document.getElementById('bar'+ 4).appendChild(img3);
	
	let img4 = document.createElement('img');
	img4.src = '../images/note.png';
	img4.setAttribute("id", 'note' + 9);
	img4.style.position = 'absolute';
	img4.setAttribute("width", '33');
	document.getElementById('bar'+ 3).appendChild(img4);
	
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
		if(pos === 398) {
			// end of animation around 6s for full bar
			let ds = new Date();
			let p = ds.getTime(); 
			console.log(p - n); // roughly 2000ms
		}
		
		if(pos === 410) {
			// end of animation
		} else {
			pos += velocity;
			elem.style.top = pos + 'px';
		}
	}
}

function initializeEvents() {
	let body = document.querySelector('body');
	body.onkeydown = EventHandler.handleKeyDown;
	body.onkeyup = EventHandler.handleKeyUp;
	body.onkeypress = EventHandler.handleKeyPress;
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