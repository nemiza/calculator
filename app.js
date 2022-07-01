const express = require('express');
const initLoaders = require('./loaders/init');

const app = express();
initLoaders(app);

app.listen(3000, () => {
    console.log(`Calculator app listening on port 3000
Try it on http://localhost:3000/swagger`);
});
