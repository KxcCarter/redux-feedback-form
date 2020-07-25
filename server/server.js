const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// for Base mode I only need to POST, I think.
app.post('/feedback', (req, res) => {
  console.log(req.body);
  const query = `INSERT INTO feedback (feeling, understanding, support, comments) 
                VALUES ($1, $2, $3, $4);`;
  pool
    .query(query, [
      req.body.feeling,
      req.body.understanding,
      req.body.support,
      req.body.comments,
    ])
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
