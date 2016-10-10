'use strict';

const Hapi = require('hapi');
const Good = require('good');

const config = require('./config');
const server = new Hapi.Server();
server.connection({ 
    host: "localhost", 
    port: 7000, 
    routes: {
            cors: config.isProd ? false : true,
            security: true
        }
    });


require('./api')(server);



server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {

            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
