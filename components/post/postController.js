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
			const { user } = req;
			const items = await Post.getAll(user);
			return res.json(items);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
	/**
	* description : Post a post
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	post: async (req, res, next) => {
		try {
			const Data = req.body;
			const { user } = req;
			const { Id } = req.params;
			const newValue = await Post.post(Data, Number(Id), user);
			return res.send(newValue);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
	/**
	* description : Delete a post
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	remove: async (req, res, next) => {
		try {
			const { Id } = req.params;
			const { user } = req;
			const result = await Post.remove(Number(Id), user);
			return res.send(result);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
};
