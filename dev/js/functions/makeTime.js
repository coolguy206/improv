var makeTime = function(hour, min, utc){
    var eventTime;
    if(hour < 12) {
        eventTime = hour + ':' + min + 'am';
    } else {
        switch(hour) {
            case '12':
                eventTime = '12' + ':' + min + 'pm';
                break;
            case '13':
                eventTime = '1' + ':' + min + 'pm';
                break;
            case '14':
                eventTime = '2' + ':' + min + 'pm';
                break;
            case '15':
                eventTime = '3' + ':' + min + 'pm';
                break;
            case '16':
                eventTime = '4' + ':' + min + 'pm';
                break;
            case '17':
                eventTime = '5' + ':' + min + 'pm';
                break;
            case '18':
                eventTime = '6' + ':' + min + 'pm';
                break;
            case '19':
                eventTime = '7' + ':' + min + 'pm';
                break;
            case '20':
                eventTime = '8' + ':' + min + 'pm';
                break;
            case '21':
                eventTime = '9' + ':' + min + 'pm';
                break;
            case '22':
                eventTime = '10' + ':' + min + 'pm';
                break;
            case '23':
                eventTime = '11' + ':' + min + 'pm';
                break;
            case '24':
                eventTime = '12' + ':' + min + 'am';
                break;
        }
        return eventTime;
    }
};

module.exports = makeTime; 