/* eslint-disable no-unused-vars */
const { logger } = require('../lib');
const config = require('../config');

module.exports = (err, req, res, next) => {
	if (config.ENV !== 'test') {
		logger.error(`Message: ${err.message}`);
		logger.error(`Stack: ${err.stack}`);
	}
	res.status(err.statusCode).json({
		errCode: err.statusCode,
		errMessage: err.message,
	});
};
