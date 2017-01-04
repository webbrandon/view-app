var assert = require('assert');
var data = require('./data');

describe('data delivery model page test', function() {

    it('should be a pending test');

    it('should have the right title', function () {
        browser.url('/user');
        var title = browser.getTitle();
        assert.equal(title, data.title );
    });

});