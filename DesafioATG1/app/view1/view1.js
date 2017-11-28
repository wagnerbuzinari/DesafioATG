'use strict';

angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.buttonClicked = false;
        function loadJSON(path, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        if (success)
                            success(JSON.parse(xhr.responseText));
                    } else {
                        if (error)
                            error(xhr);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
        }
        $scope.getCotacao = function () {
            loadJSON('https://forex.1forge.com/1.0.2/quotes?pairs=USDEUR,USDGBP,USDJPY,USDCNH&api_key=Ghy9AQMkEnKVIj8wyjX06DEQhrfRkpmm',
                function (data) {
                    $scope.Lista = data;
                    $scope.coisa = true;
                    console.log(data);
                    setTimeout($scope.getCotacao, 30000);
                    $scope.$apply();
                    $scope.buttonClicked = true;
                },
                function (xhr) {
                    console.error(xhr);
                    $scope.buttonClicked = true;
                    $scope.$apply();
                }
            );
        }
        $scope.getCotacao();
    }]);