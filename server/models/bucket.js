var mongoose   =require('mongoose');
var Schema = mongoose.Schema;
var BucketSchema = new mongoose.Schema({
     title: {
          type: String,
          required: [true, "Title is required."],
          minlength: [5, "Title minimum length is 5 characters."]
     },
     description: {
          type: String,
          required: [true, "Description is required."],
          minlength: [10, "Description minimum length is 10 characters."]
     },
     _user: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {timestamps: true });

var Bucket = mongoose.model('Bucket', BucketSchema);

module.exports = Bucket;
