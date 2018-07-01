import mysql from 'mysql'

export const mySqlconnection = (dbName, querySQL, callBack) => {
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : dbName
	});

	connection.connect(function(err) {
        if (err) {
        	throw err
        }
		connection.query(querySQL, function (err, result, fields) {
			if (err) {
				throw err
			};

			callBack(result)
		});
    });
}