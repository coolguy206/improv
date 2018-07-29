var makeDate = function(val, obj) {
    var arr = obj.split('T');
    arr = arr[0].split('-');
    var date = new Date(arr[0], arr[1]-1, arr[2]);
    var month = date.getMonth();
    var day = date.getDate();
    var weekday = date.getDay();
    var weekArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    val.day = weekArr[weekday];
    var monthArr = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    return monthArr[month] + ' ' + day;
};

module.exports = makeDate;