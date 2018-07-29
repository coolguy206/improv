
var thisYearFn = function(elem){
	var thisYear = new Date();
	thisYear = thisYear.getFullYear();
	$(elem).html(thisYear);
};

module.exports = thisYearFn;