const { ErrorHelper } = require('../../middlewares');

module.exports = {
	/**
	* description : Sends a 200-OK message if the jwt is valid.
	* @since 1.0.0
	* @status Stable
	*
	* @return {200}
	*/
	sendOk: (req, res, next) => {
		try {
			const { user } = req;
			return res.status(200).send({ firstName: user.firstName, lastName: user.lastName });
		} catch (err) {
			return next(new ErrorHelper(err.message));
		}
	},
	/**
	* description : Decodes a jwt.
	* @since 1.0.0
	* @status Stable
	*
	* @return {200} payload
	*/
	decode: (req, res, next) => {
		try {
			const { payload } = req;
			return res.status(200).send({ payload });
		} catch (err) {
			return next(new ErrorHelper(err.message));
		}
	},
};
