/**
 * Enum equivalent structure that holds keyboard input code and the
 * corresponding note. Enum itself just refers to chronological key inputs
 * in the game, and properties actually assigns corresponding key code and 
 * note that needs to be assigned to that ith key input for the game
 * structure of properties and mapping referenced from: https://stijndewitt.com/2014/01/26/enums-in-javascript/
 */
const KeyboardInput = {
	FIRST: 65,
	SECOND: 83,
	THIRD: 68,
	FOURTH: 32,
	FIFTH: 74,
	SIXTH: 75,
	SEVENTH: 76,
	properties: {
		65: {value: 0, code: 65, note: 'C'},
		83: {value: 1, code: 83, note: 'D'},
		68: {value: 2, code: 68, note: 'E'},
		32: {value: 3, code: 32, note: 'F'},
		74: {value: 4, code: 74, note: 'G'},
		75: {value: 5, code: 75, note: 'A'},
		76: {value: 6, code: 76, note: 'B'}
	}
};