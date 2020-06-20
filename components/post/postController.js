const { ErrorHelper } = require('../../middlewares');
const Post = require('./postService');

module.exports = {
	/**
	* description : Get every post
	* @since 1.0.0
	* @status Stable
	*
	* @return {Object}
	*/
	getAll: async (req, res, next) => {
		try {
			const items = await Post.getAll();
			return res.json(items);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
	/**
	* description : Get
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	get: async (req, res, next) => {
		try {
			const item = await Post.get();
			return res.json(item);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
	/**
	* description : Post
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	post: async (req, res, next) => {
		try {
			const Data = req.body;
			const { Id } = req.params;
			await Post.post(Data, Number(Id));
			return res.sendStatus(200);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
	/**
	* description : Delete
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	remove: async (req, res, next) => {
		try {
			const { Id } = req.params;
			await Post.remove(Number(Id));
			return res.sendStatus(200);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
};
