angular.module('managerApp').controller('RA.modalCtrl',
['$scope', '$timeout', 'RA.modalService', function ($scope, $timeout, Modal) {
    "use strict";

    var self = this;

    $scope.setAction = function (action, data, largeSize) {

        // Avoid modal hiding before it's been created
        if (action === false && !$scope.currentAction) {
            return ;
        }

        if (action) {

            Modal.setData(data);

            $scope.largeSize = false;
            $scope.currentAction = action;

            if (largeSize) {
                $scope.largeSize = true;
            }

            $scope.stepPath = $scope.currentAction + "/modal.html";

            self.show();

        } else {

            Modal.setData();

            self.hide();

            $timeout(function() {
                $scope.stepPath = '';
            }, 300);
        }

    };

    $scope.stepPath = '';

    $scope.resetAction = function () {
        $scope.setAction(false);
    };

    $scope.$on('RA.modal.Close', function () {
        $scope.resetAction();
    });

    $scope.$on('RA.modal.setAction', function (evt, route, data) {
        console.log("okokoko");
        $scope.setAction(route, data, false);
    });


}]);
