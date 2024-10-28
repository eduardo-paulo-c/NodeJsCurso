// Modulos
const fs = require('fs');
const http = require('http');
const url = require('url');

const slugify = require('slugify');

const replaceTemplete = require('./modules/replaceTemplate');

////////////////////////////////////////////////////////////////////////////////////////////
// FILES
// // Blocking, Synchronous way
// const textIn = fs.readFil eSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// // Non-Blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('Errooooo!!');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written!');
//             })
//         });
//     });
// });
// console.log('Will read file!');

////////////////////////////////////////////////////////////////////////////////////////////
// SERVER
//Top level code is only executed once, when the application starts

const tempOverview = fs.readFileSync(`${__dirname}/templates/templete-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/templete-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/templete-product.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));

//Call back function is executed each time tha it is requested
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });

    const cardsHTML = dataObj.map((el) => replaceTemplete(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML);
    res.end(output);

    // Product Page
  } else if (pathname === '/product') {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });

    const product = dataObj[query.id];
    const output = replaceTemplete(tempProduct, product);
    res.end(output);

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    res.end(data);

    // Not Found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page Not Found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
