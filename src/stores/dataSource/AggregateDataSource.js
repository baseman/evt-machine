var HttpUtil = require('./HttpUtil');

var AggregateDataSource = {
    promiseLoad: function(){
        return HttpUtil.promiseGet('/aggregate');
    }
};

module.exports = AggregateDataSource;
