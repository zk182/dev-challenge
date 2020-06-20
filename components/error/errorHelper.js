const util = require('util');

function ErrorHelper(message, statusCode = 500, isOperational = false) {
	this.name = this.constructor.name;
	this.message = message;
	this.statusCode = statusCode;
	this.isOperational = isOperational;
	Error.captureStackTrace(this, this.constructor);
}

util.inherits(ErrorHelper, Error);

module.exports = ErrorHelper;
