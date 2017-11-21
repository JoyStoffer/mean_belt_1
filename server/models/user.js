var mongoose   =require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
     name: {
          type: String,
          required: [true, "Name is required."],
          minlength: [2, "Name minimum character is 2"],
     },
     buckets: [{type: Schema.Types.ObjectId, ref: 'Bucket'}]
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);

module.exports = User;
