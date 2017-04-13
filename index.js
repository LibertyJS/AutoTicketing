var twitterSearch = require('twit-search');

var options = {
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token_key: access_token_key,
    access_token_secret: access_token_secret,
};

co(function *() {
    twitterSearch.setClient(options);

    var result = yield twitterSearch.search('Node.js');
    console.log(result);
});
