var  path      = require('path');
     users     = require('../controllers/users');
     sessions  = require('../controllers/sessions');
     buckets  = require('../controllers/buckets');

module.exports = (app) => {
     // app.get('/users', users.index);
     app.post('/users', users.create);

     app.get('/buckets', buckets.index);
     app.post('/buckets', buckets.create);

     app.get('/sessions', sessions.find);
     app.delete('/sessions', sessions.delete);

     app.all("*", (req,res,next) => {
          res.sendFile(path.resolve("./client/dist/index.html"))
     });


}
