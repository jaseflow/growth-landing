var app = angular.module('myApp', [])

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

var toMoment;

toMoment = _.memoize(function(date) {
    return moment(date);
});

app.filter('formatDate', function() {
    return _.memoize(function(date) {
        return toMoment(date).format('MMM MM @ H:mm A');
    });
});

app.filter('fromNow', function() {
    return function(date) {
        var m = toMoment(date);
        var now = moment();
        var threshold = now.subtract(2, 'days');
        if (m.isBefore(threshold)) {
            return toMoment(date).format('MMM MM @ H:mm A');
        }
        else {
             return toMoment(date).fromNow();
        }
    };
});

app.controller('TimelineController', ['$scope', '$http', function($scope, $http) {
        $scope.heading = 'Latest Timeline';
        // $scope.newItem = null;
        $scope.newItem = {itemName:'video'};

        $http.get('/timeline-items').then(function(items) {
            $scope.timeline = items.data;
        });

        $scope.addTimelineItem = function() {
            $scope.newItem.date = new Date;
            $scope.timeline.unshift($scope.newItem);
            $http.post('/timeline-items', $scope.newItem);
        }
}]);
