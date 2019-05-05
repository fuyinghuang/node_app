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

// app.get('*',function(req, res, next){
//     next(new Error('The route does not exist'));    
// });

app.get('*', function(req, res, next){  
    next(err);  
})

// app.use(function (err, req, res, next) {
//     console.error('this error',err.stack);
//     res.status(500).send('Something went wrong!!');
//   });

app.use((err, req, res, next) => {
    if (err) {
      console.log('this is error', err.error );
      res.status(500).send('The route does not exist!');
    }
    next();
});


app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
