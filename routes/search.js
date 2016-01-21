module.exports = function(app) {
require('dotenv').config();
var request = require("request");
var mongoose = require('mongoose');
var baseURL = "https://api.imgur.com/3/gallery/search/?q=";
var basePageURL = "https://i.imgur.com/";
var Search = require(process.cwd() + "/dbmodels/searches.js");
Search = mongoose.model("Search");
  app.get("/search/*", function(req, res) {
      var searchQuery = req.url.slice(req.url.indexOf("/search/")+8);
      var offset = searchQuery.slice(searchQuery.indexOf("?offset=") + 8);
      if(offset.length > 0){
          searchQuery=searchQuery.slice(0, searchQuery.indexOf("?offset="));
      }
      offset = parseInt(offset);
      var newSearch = new Search({"term": searchQuery});
       newSearch.save();
       request({
           "method": "GET",
           "url": baseURL + searchQuery,
           "headers":{
             'Authorization': 'Client-ID ' + process.env.CLIENT_ID
           }
           }, function(error, response, body){
               var data = JSON.parse(body).data;
               console.log(data);
               if(!error){
                   var bodyLength = data.length;
                   if(offset > 0 && bodyLength > offset){
                       bodyLength = offset;
                   }
                   var dataDisplay = [];
                   for(var i = 0; i < bodyLength; i++){
                       dataDisplay.push({"image_url": data[i].link, "title": data[i].title, "page_url": basePageURL + data[i].id});
                   }
                   res.send(dataDisplay);
               }
               else{
                   res.send(error);
               }
           });
    });
};