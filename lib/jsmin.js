var through = require('through2');
var jsmin  = require('jsmin2');

module.exports = function(option, info) {
	return through(function(buffer, encoding, callback) {
		var data = jsmin(buffer.toString());
		callback(null, data.code);
	});
};