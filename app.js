const express = require('express');
const app = express();
const calculate = require('./calculator');

const swagger = require('./swagger');
app.use('/swagger', swagger('/swagger'));

app.get('/calculate', (req, res) => {
    if (!req.query.expression)
        return res.send('Expression required');

    const result = calculate(req.query.expression);
    if (result === null)
        return res.status(400).send('The specified math expression is invalid');
    res.send(result.toString());
});

app.use((req, res) => {
    res.end(`Use swagger on localhost:3000/swagger to calculate your expression.`);
});

app.use((err, req, res) => {
    console.log(err);
    res.end('Error occurred on the server')
});

app.listen(3000, () => {
    console.log(`Calculator app listening on port 3000
Try it on http://localhost:3000/swagger`);
});
