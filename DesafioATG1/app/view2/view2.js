'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

    .controller('View2Ctrl', ['$scope', function ($scope) {
        $scope.valor = 0;
        $scope.moedaInicial = 'USD';
        $scope.moedaFinal = 'USD';
        function loadJSON(path, success, error) {
            console.log(path);
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
        $scope.converter = function (de, para) {
            loadJSON('https://forex.1forge.com/1.0.2/convert?from=' + de + '&to=' + para + '&quantity=100&api_key=Ghy9AQMkEnKVIj8wyjX06DEQhrfRkpmm',
                function (data) {
                    $scope.Lista = data;
                    $scope.coisa = true;
                    console.log(data);
                    setTimeout($scope.getCotacao, 30000);
                    $scope.apply;
                },
                function (xhr) {
                    console.error(xhr);
                }
            );
        }
}]);