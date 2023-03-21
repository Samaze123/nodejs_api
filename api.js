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

let port = process.env.PORT_API || 8090;
app.listen(port);
console.log(`api listenning to ${port}`);
