const express = require('express');
const cluster = require('express-cluster');
const util = require('util')
cluster(function(worker) {
    let app = express();
    app.get('/', function(req, res) {
        console.log('Current Worker' + worker.id)
        //res.send(`hello from worker ${util.inspect(worker,false,null)}`);
        res.send(`hello from worker ${worker.id}`);
    });
    return app.listen(3000);
}, {count: 5})