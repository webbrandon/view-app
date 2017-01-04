// Testing data module
var json  = {
    "data": []
};   
var app = {
    "type": "app-data",
    "id": 1,
    "attributes": {
        "title": "Data Delivery",
        "body": "The underlying data model is an example of how the backend can be passed via a module to views.  This seperates backend from frontend and provides a means for V&V practices."
    }
};
var user = {
    "type": "user",
    "id": "1",
    "attributes": {
      "first_name": "Brandon",
      "last_name": "Clark",
      "leaf_id": "brandon.clark"
    }
};

// App 
json.data.push(app);
module.exports.app  = json;

// User
json.included = [];
json.included.push(user);
module.exports.user = json;