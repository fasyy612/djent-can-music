/**
 * Testing for midiParser module
 */
"use strict";

let midiParser = require('../scripts/server/midiParser');
let MIDIEvents = require('midievents');

// helper function
function isEqual(first, second) {
	return (first === second);
}

/*-------------------------------------------------------------*/
/*
 * Testing midiToJson function
 */
midiParser.midiToJson('song_test');

// json files to compare
let json = require('../json/song_test.json');
let expectedJSON = require('../json/song_expected.json');

// compare the resulting json file to expected json file
console.log("Testing midiToJson function...")
if (isEqual(JSON.stringify(json), JSON.stringify(expectedJSON))) {
	console.log("passed");
	console.log("-----------------------------------")
} else {
	console.log("failed");
	console.log("-----------------------------------")
}

/*
 * Testing parseMidi function
 */
let midiFile = midiParser.parseMidi('redemption');

// test the header information
console.log("Testing midi header format...")
if (isEqual(midiFile.header.getFormat(), 0)) {
	console.log("passed");
	console.log("-----------------------------------")
} else {
	console.log("failed");
	console.log("-----------------------------------")
}

console.log("Testing midi header tracks count...");
// should be 3 since guitar/bass/drum
if (isEqual(midiFile.header.getTracksCount(), 3)) {
	console.log("passed");
	console.log("-----------------------------------")
} else {
	console.log("failed");
	console.log("-----------------------------------")
}

console.log("Testing midi header time division");
if (isEqual(midiFile.header.getTimeDivision(), 2)) {
	console.log("passed");
	console.log("-----------------------------------")
} else {
	console.log("failed");
	console.log("-----------------------------------")
}

console.log("Testing midi header Ticks per beat");
if (isEqual(midiFile.header.getTicksPerBeat(), 128)) {
	console.log("passed");
	console.log("-----------------------------------")
} else {
	console.log("failed");
	console.log("-----------------------------------")
}

// testing midi events information
let events = midiFile.getMidiEvents();
console.log(events[0].subtype);
console.log("Testing first midi event subtype");
if (isEqual(events[0].subtype, 12)) {
	console.log("passed");
	console.log("-----------------------------------")
} else {
	console.log("failed");
	console.log("-----------------------------------")
}

console.log("Testing first midi event playTime");
if (isEqual(events[0].playTime, 0)) {
	console.log("passed");
	console.log("-----------------------------------")
} else {
	console.log("failed");
	console.log("-----------------------------------")
}

let e = midiFile.getTrackEvents(0);
e.forEach(console.log.bind(console));

// Or for a single track
var trackEventsChunk = midiFile.tracks[0].getTrackContent();
var event = MIDIEvents.createParser(trackEventsChunk);

var eve;
while(eve = event.next()) {
    // Printing meta events containing text only
    if(eve.type === MIDIEvents.EVENT_META && eve.text) {
        console.log('Text meta: '+ eve.text);
    }
}

// midiParser.parseNotes(midiFile);