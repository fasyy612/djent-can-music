/*
 * Rhythm.h
 *
 *  Created on: Oct 7, 2016
 *      Author: HanyeWest
 */

#ifndef RHYTHM_H_
#define RHYTHM_H_

class Rhythm {
	float bpm = 0;  // beats per minute
	float crotchet; // duration of a beat
	float offset;   // for MP3 file metadata at beginning
	float song_pos; //
public:

	Rhythm();
	virtual ~Rhythm();

};

#endif /* RHYTHM_H_ */
