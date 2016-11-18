/**
 * various npm modules that parses midi to readable format
 */
"use strict";

let MIDIEvents = require('midievents');
let MIDIFile = require('midifile');

// global for performance, will be used for calculation
if (global) global.performance = {now: require('performance-now')};

/**
 * function that converts buffer instance to arraybuffer instance
 * source : http://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer
 * @param buffer
 * @returns arrayBuffer
 */
function toArrayBuffer(buffer) {
	let arrayBuffer = new ArrayBuffer(buffer.length);
	let view = new Uint8Array(arrayBuffer);
	for (let i = 0; i < buffer.length; ++i) {
		view[i] = buffer[i];
	}
	return arrayBuffer;
}

/**
 * function that takes string of midi filename to parse into readable format
 * using npm module 'midifile'
 * source : https://www.npmjs.com/package/midifile
 * @param fileName
 * @returns readable midiFile format that contains data about the given midi file
 */
function parseMidi(fileName) {
	let fs = require('fs');
	//let MIDIFile = require('midifile');
	
	let midiBuffer = fs.readFileSync('../sounds/song_test.mid');	
	let midiArrayBuffer = toArrayBuffer(midiBuffer);
	
	let midiFile = new MIDIFile(midiArrayBuffer);
	return midiFile;
}

/**
 * Function that takes given midiFile and parses the note on/off
 * events
 * @param midiFile
 * @returns
 */
function parseNotes(midiFile) {
	let elapsedTime = performance.now();
	let event;
	let index;
	let param2;
	let notesOn = new Array(32);
	let notes = [];
	let pair = {};
	
	let events = midiFile.getMidiEvents();
	
	for (let i = 0; i < events.length; i++) {
		event = events[i];
		
		if(event.subtype === MIDIEvents.EVENT_MIDI_NOTE_ON) {
			notesOn[event.channel].push(event.param1);
		} else if (event.subtype === MIDIEvents.EVENT_MIDI_NOTE_OFF) {
			index = notesOn[event.channel].indexOf(event.param1);
			if (index !== -1) {
				pair[noteOn] = notesOn[event.channel][index];
				pair[noteOff] = event;
				notes.push(pair);
			}
		}
	}
	
	console.log(JSON.stringify(notes));
}

/**
 * function that takes string name of midi file and parses to json format
 * the resulting json is saved under ../json folder
 * source: https://www.npmjs.com/package/midi-converter
 * @param fileName
 */
function midiToJson(fileName) {
	// initialization
	let fs = require('fs');
	let midiConverter = require('midi-converter');

	let audioPath = '../sounds/' + fileName + '.mid';
	let outputPath = '../json/' + fileName + '.json';
	
	// read in and convert the given file
	let midiSong = fs.readFileSync(audioPath, 'binary');
	let jsonSong = midiConverter.midiToJson(midiSong);

	// write as JSON
	fs.writeFileSync(outputPath, JSON.stringify(jsonSong));
}

/**
 * Function that takes given string of .json filename and parses the
 * opened json into set of note events in original midi file
 * @param fileName
 * @returns
 */
function parseJson(fileName) {
	let fs = require('fs');
	let SortedMap = require('collections/sorted-map');
	let map = new SortedMap();
	let jsonFile = fs.readFileSync('../json/' + fileName + '.json', 'utf8');
	let json = JSON.parse(jsonFile);

	let events = json.tracks[1];
	for (let i = 0; i < events.length; i++) {
		// iterate through all the track events
		if (events[i].subtype === "noteOn" || events[i].subtype === "noteOff") {
			map.set(i, events[i]);
		}
	}
}

module.exports = {
		toArrayBuffer: toArrayBuffer,
		midiToJson: midiToJson,
		parseMidi: parseMidi,
		parseJson: parseJson,
		parseNotes: parseNotes
}