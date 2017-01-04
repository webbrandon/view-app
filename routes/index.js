module.exports = function (data) {
    var express = require('express');
    var router = express.Router();
    
    var siteData = data.data[0].attributes;
    
    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: siteData.title, body: siteData.body});
    });

    return router;
}
