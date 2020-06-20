const http = require('http');
const app = require('../../app');

const config = require('../../config');
const { logger } = require('../../lib');

const port = config.PORT || '8080';

const server = http.Server(app);

/**
 * Listens the port.
 */
server.listen(port, () => {
	logger.info(`App on port ${port}!`);
});
