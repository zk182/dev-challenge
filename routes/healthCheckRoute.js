const router = require('express').Router();

router.get('/health', (req, res) => {
	res.send({
		health: 'OK',
		status: 'online',
	});
});

module.exports = router;
