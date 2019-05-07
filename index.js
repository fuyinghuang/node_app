const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => 
  res.sendFile(`${__dirname}/public/index.html`));

app.get('/about-me', (req, res) => 
  res.sendFile(`${__dirname}/public/about.html`));


// error handler for not existing page

app.get('*', function(req, res, next) {
    let err = new Error('The page does not exist!');
    next(err);
  });

app.use(function(err, req, res, next) {
      res.send(err.message); 
  });
  

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
