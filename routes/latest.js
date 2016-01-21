module.exports = function(app) {
var mongoose = require('mongoose');
var Search = require(process.cwd() + "/dbmodels/searches.js");
Search = mongoose.model("Search");
  app.get("/latest", function(req, res) {
      var recentSearches = Search.find({}, {"_id": 0, "__v": 0}).sort({"when": -1}).limit(100);
      recentSearches.exec(function(err, data){
          if(!err){
              res.send(data);
          }
          else{
           res.send("Error! The recent queries could not be retrieved.");   
          }
      });
    });
};