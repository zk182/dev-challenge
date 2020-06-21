/* eslint-disable security/detect-object-injection */
const Joi = require('joi');
const { validationHelpers } = require('../../lib');

const { createValidator } = validationHelpers;

const postSchema = Joi.object().keys({
	Id: Joi.number().strict().required(),
	text: Joi.string().required(),
	author: Joi.string().required(),
	state: Joi.string().required().valid(['Draft', 'Private', 'Public']),
});

module.exports = {
	validPost: createValidator(postSchema),
};
