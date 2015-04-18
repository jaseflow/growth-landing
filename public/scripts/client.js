var app = angular.module('myApp', [])

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('TimelineController', ['$scope', '$http', function($scope, $http) {
    $http.get('/timeline-items').then(function(items) {
      $scope.timeline = items.data;
    });
}]);
