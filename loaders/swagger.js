const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');

module.exports = function serveSwagger(basePath) {
    const router = express.Router();

    router.get(`/swagger.yml`, (req, res) => {
        fs.readFile('./docs/swagger/openapi.yml', 'utf8', (err, data) => res.send(data));
    });
    router.use('/', express.static('./docs/swagger'));
    router.use('/', swaggerUi.serve, swaggerUi.setup(null, { swaggerOptions: { url: `${basePath}/swagger.yml` } }));
    return router;
};