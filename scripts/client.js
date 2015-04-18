var app = angular.module('myApp', []).config(function($interpolateProvider){
    // $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('AppController', ['$scope', function($scope) {
    $scope.timeline = [
        {
            date: '',
            personName: '',
            profileUrl: '',
            actionText: '',
            itemName: ''
        },
        {
            date: '',
            personName: '',
            profileUrl: '',
            actionText: '',
            itemName: ''
        },
        {
            date: '',
            personName: '',
            profileUrl: '',
            actionText: '',
            itemName: ''
        }
    ]
}]);
