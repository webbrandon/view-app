// Testing data module
var json  = {
    "data": []
};   
var app = {
    "type": "app-data",
    "id": 1,
    "attributes": {
        "title": "foobar",
        "body": "This is a test."
    }
};
var user = {
    "type": "user",
    "id": "1",
    "attributes": {
      "first_name": "foo",
      "last_name": "bar",
      "leaf_id": "foo.bar"
    }
};

// App 
json.data.push(app);
module.exports.app  = json;

// User
json.included = [];
json.included.push(user);
module.exports.user = json;