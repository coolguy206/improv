var makeDate = require('./makeDate.js');
var makeHour = require('./makeHour.js');
var makeMin = require('./makeMin.js');
var makeTime = require('./makeTime.js');

var addToObj = function(name,val,imgSource,i){
    var url = name.replace(/ /g,'-');
    var date = makeDate(val, val.start_time);

    var utc = val.start_time.split('+');
    utc = utc[1];

    var startHour = makeHour(val.start_time);
    var startMin = makeMin(val.start_time);


    var endHour = makeHour(val.end_time);
    var endMin = makeMin(val.end_time);

    var startEvent = makeTime(startHour, startMin, utc);
    var endEvent = makeTime(endHour, endMin, utc); 

    if(name.indexOf('classes') !== -1 || name.indexOf('class') !== -1 || name.indexOf('workshop') !== -1) {
        val.category = 'classes';
    } else {
        val.category = 'shows';
    }
    
    val.img = imgSource;
    val.url = url;
    val.date = date;
    val.startTime = startEvent;
    val.endTime = endEvent;
    val.index = i;
        
};

module.exports = addToObj;