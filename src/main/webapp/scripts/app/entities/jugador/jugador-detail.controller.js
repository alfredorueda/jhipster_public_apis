'use strict';

angular.module('pruebaApp')
    .controller('JugadorDetailController', function ($scope, $rootScope, $stateParams, entity, Jugador) {
        $scope.jugador = entity;
        $scope.load = function (id) {
            Jugador.get({id: id}, function(result) {
                $scope.jugador = result;
            });
        };
        var unsubscribe = $rootScope.$on('pruebaApp:jugadorUpdate', function(event, result) {
            $scope.jugador = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
