var Hapi = require('hapi');
var server = new Hapi.Server();
var routes = require('./routes.js');

server.connection({
  port: process.env.port || 8000
});

server.route(routes);

server.start(function(){
  console.log("server running");
});
