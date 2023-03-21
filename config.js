const config = {
	user: process.env.USER,
	password: process.env.PASSWORD,
	server: process.env.SERVER,
	database: process.env.DATABASE,
	port: process.env.PORT_SERVER,
	trustServerCertificate: true,
};

module.exports = config;
