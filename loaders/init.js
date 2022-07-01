const swaggerLoader = require('./swagger');
const apiLoader = require('../api/routes');
const expressLoader = require('./express');

function init (app) {
    app.use('/swagger', swaggerLoader('/swagger'));
    app.use('/calculate', apiLoader);
    expressLoader(app);
};

module.exports = init;
