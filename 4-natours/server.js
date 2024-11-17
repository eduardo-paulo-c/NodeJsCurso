const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.port || 3000;
console.log(process.env.NODE_ENV);
// START SERVER
app.listen(port, () => {
  console.log(`Running at port: ${port}...`);
});
