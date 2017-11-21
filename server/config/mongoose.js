var  mongoose     = require("mongoose");
     db_name      = "mean_belt_1";

mongoose.connect(`mongodb://localhost/${db_name}`,{useMongoClient: true});
