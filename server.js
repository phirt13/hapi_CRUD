const Hapi = require('hapi');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/artists', (err) => {
  if (err) console.log(err);
  console.log('Opened Connection to MongoDB');
});

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: port
});

server.start((err) => {
  if (err) throw err;
  console.log('Server running at:', server.info.uri);
});
