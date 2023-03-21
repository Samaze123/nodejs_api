const config = require('./config');
const sql = require('mssql');
// add api operations here

async function getIngredients() {
	try {
		let pool = await sql.connect(config);
		let ingredients = await pool
			.request()
			.query('SELECT TOP 10 * FROM Ingredients');
		return ingredients.recordsets;
	} catch (err) {
		console.log(err);
	}
}

async function getIngredient(id) {
	try {
		let pool = await sql.connect(config);
		let ingredient = await pool
			.request()
			.input('id', sql.Int, id)
			.query('SELECT * FROM Ingredients WHERE idIng = @id');
		return ingredient.recordsets;
	} catch (err) {
		console.log(err);
	}
}

async function addIngredient(ingredient) {
	try {
		let pool = await sql.connect(config);
		let ingredient_returned = await pool
			.request()
			.input('name', sql.NVarChar, ingredient.nameIng)
			.query('INSERT INTO Ingredients VALUES(@name)');
		return ingredient_returned.recordsets;
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	getIngredients: getIngredients,
	getIngredient: getIngredient,
	addIngredient: addIngredient,
};
