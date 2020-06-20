const Joi = require('joi');
const { validationHelpers, generalTypes } = require('../../lib');

const { createValidator } = validationHelpers;

const Schema = Joi.object().keys({
	name: Joi.string().required(),
	iat: Joi.number().required(),
	exp: Joi.number().required(),
});

module.exports = {
	jwtSchema: createValidator(Schema),
};
