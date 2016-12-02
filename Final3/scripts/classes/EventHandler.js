/**
 * EventHandler class contains all the functions related to
 * user input, including graphical and audio events
 */
class EventHandler {
	/*
	 * Function that gives updated message to user
	 */
	static appendMessage(message) {
		document.getElementById('gameStatus').innerHTML += '<br>' + message;
		
		/*insert after cross-origin policy is solved
	    if (typeof browser === "undefined") {
	        // this is edge browser, just use iframe regularly
			$(function() {  
			    let $iframe = $('#messageIframe');
			    $iframe.ready(function() {
			        $iframe.contents().find("body").append('Test');
			    });
			});
	    }
	    */
	}
	
	/*
	 * Function to reset the messages board
	 */
	static clearMessage() {
		document.getElementById('gameStatus').innerHTML = "";
	}
	
	/*
	 * Function that plays given audio element
	 */
	static playAudio(audio) {
		if (audio !== undefined) {
			audio.pause();
			audio.volume = 1.0;
			if (audio.readyState >= 2){
				audio.currentTime = 0;
				//audio.play();
			}
		}
	}
	
	/*
	 * Function that triggers given index bar to change color to yellow
	 * transparent gradient for key down event
	 */
	static barFlash(barIndex) {
		let barId = "bar" + barIndex;
		let barDiv = document.getElementById(barId);
		
		// change the color to transparent yellow gradient 
		barDiv.style.background = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,1))";
	}

	/*
	 * Function that triggers square buttons to change color on key
	 * down event
	 */
	static buttonFlash(buttonIndex) {
		let buttonId = "key" + buttonIndex;
		let buttonImg = document.getElementById(buttonId);
		buttonImg.style.filter = 'hue-rotate(90deg)';
	}
	
	/* 
	 * Function wrapper for all visual/audio events
	 */
	static executeEvents(audio, index) {
		EventHandler.playAudio(audio);
		EventHandler.barFlash(index);
		EventHandler.buttonFlash(index);
	}
	
	/*
	 * Function that handles when user presses given key sets
	 * if recognizable key is pressed, appropriate events should
	 * trigger
	 */
	static handleKeyDown(event) {
		// recognized keys will trigger color change + note sound
		let soundId;
		let audio;
		let value;
		let inputProperties;
		if(event.keyCode !== undefined) {
			// fetch the appropriate enum from the keycode
			inputProperties = KeyboardInput.properties[event.keyCode];

			if(inputProperties !== undefined) {
				// the keycode is recognizable
				soundId = inputProperties.note;
				value = inputProperties.value;
				audio = document.getElementById(soundId);
				switch (event.keyCode) {
					case KeyboardInput.FIRST:
						EventHandler.executeEvents(audio, value);
						break;
					case KeyboardInput.SECOND:
						EventHandler.executeEvents(audio, value);
						break;
					case KeyboardInput.THIRD:
						EventHandler.executeEvents(audio, value);
						break;
					case KeyboardInput.FOURTH:
						EventHandler.executeEvents(audio, value);
						break;
					case KeyboardInput.FIFTH:
						EventHandler.executeEvents(audio, value);
						break;
					case KeyboardInput.SIXTH:
						EventHandler.executeEvents(audio, value);
						break;
					case KeyboardInput.SEVENTH:
						EventHandler.executeEvents(audio, value);
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

	/*
	 * Function that handles keyup event it will revert the 
	 * initial image state 
	 */
	static handleKeyUp(event) {
		// revert images back to normal
		for (let i = 0; i < 7; i++) {
			let barId = "bar" + i;
			let barDiv = document.getElementById(barId);
			barDiv.style.background = "";
			
			let buttonId = "key" + i;
			let buttonImg = document.getElementById(buttonId);
			buttonImg.style.filter = '';
		}
	}

	/*
	 * Function that handles continuous key press
	 */
	static handleKeyPress(event) {
		// loop the handleKeyDown function
		console.log('key is pressed continuously');
		EventHandler.handleKeyDown(event);
	}
}