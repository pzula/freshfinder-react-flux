var appConstants = require('../constants/appConstants');
var axios = require('axios');

var base_url = "http://freshfinder.us/api/v1/markets/"

var freshFinderUtils = {
  getMarket: function(id){
    var url = base_url + id
    return axios.get(url);
  }
};

module.exports = freshFinderUtils;
