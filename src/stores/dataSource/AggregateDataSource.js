var Promise = require('es6-promise').Promise;
var r = require('superagent');
var config = require('./config');

var AggregateDataSource = {
    promiseLoad: function(){
        return new Promise((resolve, reject) => {
            r
                .get(config.hostUrl + '/aggregate')
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

module.exports = AggregateDataSource;
