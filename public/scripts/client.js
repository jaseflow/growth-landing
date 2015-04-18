console.log('a');

var app = angular.module('myApp', [])

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

console.log('b');

app.controller('TimelineController', ['$scope', function($scope) {
    console.log('c');
    $scope.timeline = [
        {
            date: 'yesterday',
            personName: 'Jason',
            profileUrl: 'https://github.com/jsncbt',
            actionText: 'ate',
            itemName: 'heaps of cake'
        },
        {
            date: 'today',
            personName: 'Simon',
            profileUrl: 'http://simonlang.org',
            actionText: 'made angular work',
            itemName: 'like a boss'
        }
    ]
}]);
