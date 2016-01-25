var app = angular.module('app', ['ui.bootstrap', 'ui.bootstrap.datetimepicker']);

app.controller('MyController', ['$scope', function($scope) {

    var that = this;

    var in10Days = new Date();
    in10Days.setDate(in10Days.getDate() + 10);

    this.dates = {
        date3: new Date(),
    };

    this.open = {
        date3: false,
    };

    // Disable today selection
    this.disabled = function(date, mode) {
        return (mode === 'day' && (new Date().toDateString() == date.toDateString()));
    };

    this.dateOptions = {
        showWeeks: false,
        startingDay: 1
    };

    this.timeOptions = {
        readonlyInput: false,
        showMeridian: false
    };

    this.dateModeOptions = {
        minMode: 'year',
        maxMode: 'year'
    };

    this.openCalendar = function(e, date) {
        that.open[date] = true;
    };



    $scope.$on('$destroy', function() {
        unwatch();
    });
}]);