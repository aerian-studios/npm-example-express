const express = require('express');
const app = express();
const library = require('npm-example-library');

let controller = function(req, res) {
    let libraryModule1 = library.module1;
    res.send('Hello World - ' + libraryModule1.hello('ben'));
};

app.get('/', controller);

app.listen(3000, function () {
    console.log('Listening on port 3000');
})
