const operations = require('./operations');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
	// Auth Should be here
	console.log('bonjour');
	next();
});

// ADD HERE ROUTES
router.route('/ingredients').get((request, response) => {
	operations.getIngredients().then((result) => {
		response.json(result[0]);
	});
});

router.route('/ingredient/:id').get((request, response) => {
	operations.getIngredient(request.params.id).then((result) => {
		response.json(result[0][0]);
	});
});

router.route('/ingredient').post((request, response) => {
	let ingredient = { ...request.body };
	// console.log(`ingredient : ${ingredient} body : ${request.body}`);
	operations.addIngredient(ingredient).then((result) => {
		response.status(201).json(result);
	});
});

let port = process.env.PORT_API || 8090;
app.listen(port);
console.log(`api listenning to ${port}`);
