const config = require('config');

const PORT = config.get('port') || 5000;
const UrlMongodb = config.get('url');
const jwtSecret = config.get('jwtSecret');
const baseUrl = config.get('baseUrl');

module.exports = { PORT, UrlMongodb, jwtSecret, baseUrl };
