const Joi = require('joi');
const { validationHelpers } = require('../../lib');

const { createValidator } = validationHelpers;

const Schema = Joi.object().keys({
	name: Joi.string().required(),
	iat: Joi.number().required(),
	sub: Joi.string().required(),
});

module.exports = {
	jwtSchema: createValidator(Schema),
};
