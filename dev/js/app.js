var app = angular.module('myApp',['ngRoute']);

// change the year
var thisYearFn = require('../../dev/js/functions/changeYear.js');
thisYearFn('.year');
