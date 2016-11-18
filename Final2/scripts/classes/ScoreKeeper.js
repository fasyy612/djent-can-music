/**
 * Score keeper class
 */
"use strict";

// 398px from top is the 'perfect' for notes
class ScoreKeeper {
	constructor(numPlayers) {
		this.totalScore = 0;
		this.perfectCount = 0;
		this.greatCount = 0;
		this.goodCount = 0;
		this.badCount = 0;
		this.missCount = 0;
	}
	
	/*getter and setter functions*/
	setTotalScore(score) {
		this.totalScore = score;
	}
	
	getTotalScore() {
		return this.totalScore;
	}
	
	setPerfectCount(count) {
		this.perfectCount = count;
	}
	
	getPerfectCount() {
		return this.perfectCount;
	}	
	
	setGreatCount(count) {
		this.greatCount = count;
	}
	
	getGreatCount() {
		return this.greatCount;
	}
	
	setGoodCount(count) {
		this.goodCount = count;
	}
	
	getGoodCount() {
		return this.goodCount;
	}
	
	setBadCount(count) {
		this.badCount = count;
	}
	
	getBadCount() {
		return this.badCount;
	}	
	
	setMissCount(count) {
		this.missCount = count;
	}
	
	getMissCount() {
		return this.missCount;
	}	
	
	// score keeping functions
	addScore(score) {
		this.score += score;
	}
	
	calculateScore() {
		this.score += Scores.PERFECT * this.perfectCount;
		this.score += Scores.GREAT * this.greatCount;
		this.score += Scores.GOOD * this.goodCount;
		this.score += Scores.BAD * this.badCount;
	}
}