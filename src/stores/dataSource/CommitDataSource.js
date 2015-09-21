var httpUtil = require('./HttpUtil');

var CommitDataSource = {
    promiseCommit: function(commitAggregateItems){
        return httpUtil.promisePost('/commit', {
            commitAggregateBody: {
                commitAggregateItems: commitAggregateItems
            }
        });
    }
};
module.exports = CommitDataSource;
