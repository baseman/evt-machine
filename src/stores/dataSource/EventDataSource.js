var HttpUtil = require('./HttpUtil');

var EventDataSource = {
    promiseLoad: function(){
        return HttpUtil.promiseGet('/event');
    }
};

module.exports = EventDataSource;
