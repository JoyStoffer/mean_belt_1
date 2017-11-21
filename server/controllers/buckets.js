var  Bucket      = require('../models/bucket');

module.exports = {
     index: (req, res) => {
     // res.json({output: 'index works'});

          Bucket.find({}, (err, buckets) => {
              if (err) {
                   return  res.json(err.errors);
              }
              return res.json(buckets);
          });
     },

     create:(req, res) => {
       // res.json({output: 'create works'});
       let bucket = new Bucket(req.body);

       bucket.save((err) => {
            if (err){
                 return res.json(err.errors);
            }
            return res.json(bucket);
       });
 },
}
