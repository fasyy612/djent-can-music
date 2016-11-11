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
});

function initializeEvents() {
	let body = document.querySelector('body');
	body.onkeydown = EventHandler.handleKeyDown;
	body.onkeyup = EventHandler.handleKeyUp;
	body.onkeypress = EventHandler.handleKeyPress;
}

function initializeScreen() {
	let left = 36;
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
		console.log(top);
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