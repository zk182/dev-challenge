const exampleRouter = require('express').Router();
const service = require('./postController');
const { jwtHelper } = require('../../middlewares');

// Authorization

exampleRouter.route('/')
	.get(jwtHelper.verifyJwt, service.getAll);

exampleRouter.route('/:Id')
	.post(jwtHelper.verifyJwt, service.post)
	.delete(jwtHelper.verifyJwt, service.remove);

module.exports = exampleRouter;
