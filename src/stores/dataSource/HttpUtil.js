var Promise = require('es6-promise').Promise;
var r = require('superagent');
var config = require('./config');

var HttpUtil = {
    promiseGet: function(resourcePath){
        return new Promise( (resolve, reject) => {
            r
                .get(config.hostUrl + resourcePath)
                .end((error, res) => {
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(res.body);
                    }
                });
        });
    }
};

module.exports = HttpUtil;
