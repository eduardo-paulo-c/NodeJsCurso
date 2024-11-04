const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
  console.log('Costumer name: Paulo');
});

myEmitter.on('newSale', (stuck) => {
  console.log(`There are now ${stuck} items left on stuck.`);
});

myEmitter.emit('newSale', 9);

///////////////////////////////////////////////////////////////////////////////

const server = http.createServer();

server.on('request', (req, resp) => {
  console.log('Requeste received!');
  console.log(req.url);
  resp.end('Requeste received!');
});

server.on('request', (req, resp) => {
  console.log('Another requeste received!');
});

server.on('close', () => {
  console.log('Server closed!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Wainting for requests...');
});
