var makeHour = function(time){
    if(time !== undefined){
        var startTime = time.split('T');
        var eventStartTime = startTime[1].split('+');
        eventStartTime = eventStartTime[0];
        var timer = eventStartTime.split(':');
        var hour = timer[0];
        return hour;
    }
};

module.exports = makeHour;