const winston = require('winston');
const config = require('../config');

const logger = winston.createLogger({
	level: config.LOG_LEVEL,
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json(),
	),
	silent: config.ENV === 'test',
	transports: [
		//
		// - Write to all logs with level `info` and below to `combined.log`
		// - Write all logs error (and below) to `error.log`.
		//
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' }),
	],
});

if (config.ENV !== 'production') {
	logger.add(new winston.transports.Console({
		format: winston.format.combine(
			winston.format.colorize(),
			winston.format.simple(),
		),
	}));
}

module.exports = logger;
