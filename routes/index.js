const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const { swaggerOptions } = require('../lib');

const healthCheckRoute = require('./healthCheckRoute');
const errorsRoute = require('../middlewares/errorsRoute');
const postRoute = require('../components/post/postRoute');

const swaggerSpec = swaggerOptions;

// Router
const router = new Router();

// Swagger
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health Route for load balancers
router.use(healthCheckRoute);

// Models
router.use('/post', postRoute);

// Errors
router.use(errorsRoute);

module.exports = router;
