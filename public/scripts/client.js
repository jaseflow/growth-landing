var app = angular.module('myApp', [])

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
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
      $scope.timeline.push($scope.newItem);
      $http.post('/timeline-items', $scope.newItem);
    }
}]);
