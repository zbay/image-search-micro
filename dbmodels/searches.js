var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SearchSchema = new Schema({"term": String, "when": {type: Date, default: Date.now}});
  
mongoose.model('Search', SearchSchema);