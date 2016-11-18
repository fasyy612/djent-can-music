/**
 * note class holds all information related to a note object
 * including image element and what position the note is supposed
 * to be at inside the game
 */

class Note {
	constructor(index) {
		this.position = 0;
		this.imageElem = document.createElement('img');
		this.imageElem.src = '../images/note.png';
		this.imageElem.setAttribute("id", 'note' + index);
		this.imageElem.style.position = 'absolute';
		this.imageElem.setAttribute("width", '33');
	}
}
