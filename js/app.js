const mysql = require('mysql')

//конфигурация
const conn = mysql.createConnection({
	host: 'vh290.spaceweb.ru',
	user: 'enpozito',
	database: 'enpozito',
	password: 'cvb35Kld0338'
})

conn.connect ((err) => {
	if (err) {
		console.log(err)
		return err
	} else {
		console.log('database OK')
	}
})

let query = "SELECT * FROM users"

conn.query(query, (err, result) => {
	console.log(err)
	console.log(result)
})

conn.end ((err) => {
	if (err) {
		console.log(err)
		return err
	} else {
		console.log('database is closed')
	}
})