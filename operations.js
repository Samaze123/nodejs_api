const config = require('./config');
const sql = require('mssql');
// add api operations here

async function getIngredients() {
	try {
		let pool = sql.connect(config);
		let ingredients = await pool
			.request()
			.query('SELECT TOP 10 * FROM Ingredients');
		return ingredients.recordsets;
	} catch (err) {
		console.log(err);
	}
}

module.exports = { getIngredients: getIngredients };
