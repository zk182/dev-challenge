require('dotenv').config();
const pckg = require('./package.json');

module.exports = {
	PORT: process.env.PORT,
	NAME: pckg.name,
	VERSION: pckg.version,
	NODE_ENV: process.env.NODE_ENV || 'dev',
	LOG_LEVEL: process.env.LOG_LEVEL || 'info',
	JWT_SECRET: process.env.JWT_SECRET,
};
