const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log('Db connection successful!');
  });

const port = process.env.port || 3000;
// console.log(process.env.NODE_ENV);
// START SERVER
app.listen(port, () => {
  console.log(`Running at port: ${port}...`);
});
