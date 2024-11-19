const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const { MongoNetworkError } = require('mongodb');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

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

const toursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour must have a name.'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'Tour must have a name.'],
  },
});

const Tour = mongoose.model('Tour', toursSchema);

const port = process.env.port || 3000;
// console.log(process.env.NODE_ENV);
// START SERVER
app.listen(port, () => {
  console.log(`Running at port: ${port}...`);
});
