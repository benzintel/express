import mysql from 'mysql'
import mongo from 'mongodb';

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

export const mongoDBconnection = (host, dbName , collectionName) => {
	MongoClient.connect('mongodb://' + host +'/' + dbName, function (err, client) {
	if (err) throw err

	var db = client.db(dbName);

	db.collection(collectionName).find().toArray(function (err, result) {
		if (err) throw err
			console.log(result)
		})
	})
}