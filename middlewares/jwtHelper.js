const jwt = require('jsonwebtoken');
const config = require('../config');
const ErrorHelper = require('../components/error/errorHelper');
const jwtValidate = require('../components/jwt/jwtValidations');

const verifyJwtToken = async (bearerHeader) => {
	if (typeof bearerHeader !== 'undefined') {
		const [header, bearerToken] = bearerHeader.split(' ');
		let token = bearerToken;
		if (header !== 'Bearer') {
			token = header;
		}
		return jwt.verify(token, config.JWT_SECRET);
	}
	return null;
};

const verifyJwt = async (req, res, next) => {
	try {
		const valid = await verifyJwtToken(req.headers.authorization);
		const validStructure = await jwtValidate.jwtSchema(valid);
		if (valid && validStructure) {
			req.user = valid.name;
			next();
		} else {
			throw new ErrorHelper('Forbidden request', 403, true);
		}
	} catch (err) {
		next(new ErrorHelper(err.message, err.statusCode, err.isOperational));
	}
};

const decodeJwt = async (req, res, next) => {
	try {
		const bearerHeader = req.headers.authorization;
		if (typeof bearerHeader === 'string') {
			const bearer = bearerHeader.split(' ');
			const decodedToken = jwt.decode(bearer[1]);
			const valid = await jwtValidate.jwtSchema(decodedToken);
			if (valid) {
				req.payload = decodedToken;
				next();
			}
		}
		if (!req.payload) {
			next(new ErrorHelper('Forbidden', 403, true));
		}
	} catch (err) {
		next(new ErrorHelper(err.message, err.statusCode, err.isOperational));
	}
};
module.exports = {
	verifyJwtToken,
	verifyJwt,
	decodeJwt,
};
