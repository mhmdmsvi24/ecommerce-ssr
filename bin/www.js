#!/usr/bin/env node

/**
 * Module dependencies.
 */
var app = require('../app');
var debug = require('debug')('ecommerce-ssr:server');
var http = require('http');
const { AppDataSource } = require("../db/data-source");
const mockProducts = require('../db/product-seed');
// const mockProducts = require("../db/product-seed");

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Connect DB first, then create server
 */
AppDataSource.initialize()
    .then(async () => {
        const productRepo = AppDataSource.getRepository("Product");
        // productRepo.clear()
        // for (const p of mockProducts) {
        //     const product = productRepo.create(p);
        //     await productRepo.save(product)

        //     console.log(`seeded ${product}`)
        // }

        console.log("✅ Database connected");

        var server = http.createServer(app);

        server.listen(port);
        server.on('error', onError);
        server.on('listening', onListening);

        function onListening() {
            var addr = server.address();
            var bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port;
            debug('Listening on ' + bind);
        }
    })
    .catch((err) => {
        console.error("❌ Database connection failed:", err);
        process.exit(1); // don't start app if DB fails
    });

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val; // named pipe
    }
    if (port >= 0) {
        return port; // port number
    }
    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
