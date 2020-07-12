//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// define the Express app
const app = express();

// the database
const accounts = [];

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// retrieve all accounts
app.get('/', (req, res) => {
  const accountsResponse = accounts.map(account => ({
    id: account.id,
    publicKey: account.publicKey,
    privateKey: account.privateKey,
  }));
  res.send(accounts);
});

// get a specific account
app.get('/:id', (req, res) => {
  const account = accounts.filter(q => (q.id === parseInt(req.params.id)));
  if (question.length > 1) return res.status(500).send();
  if (question.length === 0) return res.status(404).send();
  res.send(account[0]);
});

// insert a new question
app.post('/', (req, res) => {
  const {id, publicKey, privateKey} = req.body;
  const newAccount = {
    id: account.id,
    publicKey: account.publicKey,
    privateKey: account.privateKey,
  };
  accounts.push(newAccount);
  res.status(200).send();
});

// update account
app.patch('/account/:id', (req, res) => {
  res.status(200).send();
});

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});
