module.exports = function(app) {
require('dotenv').config();
var request = require("request");
var mongoose = require('mongoose');
var baseURL = "https://api.imgur.com/3/gallery/search/?q=";
var Search = require(process.cwd() + "/dbmodels/searches.js");
Search = mongoose.model("Search");
  app.get("/search/*", function(req, res) {
      var searchQuery = req.url.slice(req.url.indexOf("/search/")+8);
      var offset = "" + searchQuery.slice(req.url.indexOf("?offset=") + 8);
      if(offset.length > 0){
          searchQuery=searchQuery.slice(0, req.url.indexOf("?offset=") + 8);
      }
      var newSearch = new Search({"term": searchQuery});
       newSearch.save();
       request({
           "method": "GET",
           "url": baseURL + searchQuery,
           "headers":{
             'Authorization': 'Client-ID ' + process.env.CLIENT_ID
           }
           }, function(error, response, body){
               if(!error && response.statusCode == 200){
                   var data = JSON.parse(body.data);
                   //make data more readeable and limit results to the offset number or 60, whichever's smaller
                   //image_url: link, snippet: title, page_url: "http://i.imgur.com/" + id
                   res.send(data);
               }
               else{
                   res.send(error);
               }
           });
    });
};