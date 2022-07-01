const calculator = require('./calculator');

function calculate (req, res) {
    if (!req.query.expression)
        return res.send('Expression required');

    const result = calculator(req.query.expression);
    if (result === null)
        return res.status(400).send('The specified math expression is invalid');
    res.send(result.toString());
}

module.exports = { calculate };