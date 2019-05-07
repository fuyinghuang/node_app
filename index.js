const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');
const public = path.join(__dirname, 'public')

app.use(express.static(`${__dirname}/public`));
app.use('/', express.static(public));

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
   
});

app.get('/about-me', function(req, res) {
    res.sendFile(path.join(public, 'about.html'));
});

// error handler for not existing page

app.get('*', function(req, res, next) {
    let err = new Error('The page does not exist!');
    next(err);
  });

app.use(function(err, req, res, next) {
      res.send(err.message); 
  });
  

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
