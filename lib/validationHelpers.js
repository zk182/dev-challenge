const logger = require('./logger');

const createValidator = schema => values => new Promise((resolve) => {
	const result = schema.validate(values);
	if (result.error) {
		logger.error(result.error.message);
		resolve({ error: true, message: result.error.message });
	} else {
		resolve({ error: false, value: result.value });
	}
});

module.exports = {
	createValidator,
};
