var makeMin = function(time){
    if(time !== undefined) {
        var startTime = time.split('T');
        var eventStartTime = startTime[1].split('+');
        eventStartTime = eventStartTime[0];
        var timer = eventStartTime.split(':');
        var min = timer[1];
        return min;
    }
};

module.exports = makeMin;