/**
 * Testing SQL connection and data post using node
 * test if the server connects to mySQL server correctly
 * and posts right data for to be used in the client page
 */
"use strict";

let insertData = require('../scripts/server/insertData');

// create connection
let connection = insertData.connectToServer();

connection.query('INSERT INTO user (id, firstname, lastname, password, ranking) VALUES (?,?,?,?,?)', ['djent', 'jens', 'kidman', 'thall', 1], function(err, result) {
	if (err) throw err;
	connection.query('SELECT * FROM user', function(err, results) {
		if (err) throw err;
		console.log(results[0].firstname);
		connection.end(function(error) {
			// connection ended
		});
	});
});

//insertData.insertData(connection, data);