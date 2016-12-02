/**
* nodejs module to connect to cpanel mySQL server
*/
"use strict";

function connectToServer() {
	let mysql = require('mysql');
	
	let connection = mysql.createConnection({
		host: '127.0.0.1',
		port: '3306',
		user: 'root',
		password: 'Ad2wqrty123',
		database: 'djentcanmusic_userdata'
	});
	
	// connect function with callback for error handling
	connection.connect(function(error) {
		if(error) {
			console.log('Could not connect to database');
			return;
		} else {
			console.log('connected to database!');
		}
	});
	
	return connection;
}

/**
 * Function that inserts parameter data into the user database
 * @param connection
 * @param data
 */
function insertUserData(connection, data) {
	connection.query('INSERT INTO mididata SET ?', data, function(error, res) {
		if(error !== undefined) throw error;
		console.log('last insert ID: ', res.insertID);
	});
}

module.exports = {
		connectToServer: connectToServer,
		insertData: insertData
}

