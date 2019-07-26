	/*
* A single instance of Node.js runs in a single thread. To take advantage of multi-core systems,
* the user will sometimes want to launch a cluster of Node.js processes to handle the load.
The cluster module allows you to easily create child processes that all share server ports.
* */

const cluster = require('cluster');
const http = require('http');
const noOfCPU = require('os').cpus().length;


let createServer = () => {
    
    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);

        // Fork workers.
        for (let i = 0; i < noOfCPU; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
        //
        http.createServer((req, res) => {
            res.writeHead(200);
            res.end('hello world\n');
        }).listen(3000);

        console.log(`Worker ${process.pid} started`);
    }

}


createServer();
