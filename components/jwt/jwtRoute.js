const jwtRouter = require('express').Router();
const { jwtHelper } = require('../../middlewares');
const service = require('./jwtService');

jwtRouter.route('/')
	.get(service.sendOk);

jwtRouter.route('/decode')
	.get(jwtHelper.decodeJwt, service.decode);

module.exports = jwtRouter;
