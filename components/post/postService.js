/* eslint-disable no-empty */
/* eslint-disable security/detect-object-injection */
const { ErrorHelper } = require('../../middlewares');
const { validPost } = require('./postValidations');

const posts = [];

const getAll = () => {
	try {
		return posts;
	} catch (err) {
		throw new ErrorHelper(err.message, err.statusCode, err.isOperational);
	}
};

const get = (id) => {
	try {
		return posts.filter(post => post.id === id);
	} catch (err) {
		throw new ErrorHelper(err.message, err.statusCode, err.isOperational);
	}
};

const post = async (postarg, id) => {
	try {
		const Post = { ...postarg };
		Post.Id = id;
		const validation = await validPost(Post);
		if (validation.error) throw new Error(validation.message);
		posts.push(Post);
	} catch (err) {
		throw new ErrorHelper(err.message, err.statusCode, err.isOperational);
	}
};

const remove = (id) => {
	try {
		const index = posts.findIndex(element => element.Id === id);
		if (index > -1) delete posts[index];
		return;
	} catch (err) {
		throw new ErrorHelper(err.message, err.statusCode, err.isOperational);
	}
};

module.exports = {
	getAll,
	get,
	post,
	remove,
};
