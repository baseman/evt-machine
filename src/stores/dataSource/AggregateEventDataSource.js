var HttpUtil = require('./HttpUtil');

var AggregateEventDataSource = {
    promiseLoad: function(){
        return HttpUtil.promiseGet('/aggregateEvent');
    }
};

module.exports = AggregateEventDataSource;
