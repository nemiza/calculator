module.exports = function (app) {
    app.use((req, res) => {
        res.end(`Use swagger on localhost:3000/swagger to calculate your expression.`);
    });
    
    app.use((err, req, res) => {
        console.log(err);
        res.end('Error occurred on the server')
    });
};