module.exports = function (data) {
    var express = require('express');
    var router = express.Router();
    
    var siteData = data.data[0].attributes;
    var userData = data.included[0].attributes;
    
    /* GET home page with user data*/
    router.get('/', function(req, res, next) {
        res.render('index', { 
            title: siteData.title + " : " + userData.leaf_id, 
            body: siteData.body + ".  i hope you liked your personal demo.",
            user: userData.first_name + " " + userData.last_name
        });
    });

    return router;
}
