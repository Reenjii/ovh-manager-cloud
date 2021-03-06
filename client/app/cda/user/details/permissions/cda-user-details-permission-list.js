angular.module("managerApp")
    .config(function ($stateProvider) {
        "use strict";

        $stateProvider
            .state("paas.cda.cda-details.cda-user.cda-user-details.cda-user-details-permission-list", {
                url: "/permission/list",
                views: {
                    cdaUserDetailsTitle: {
                        templateUrl: "app/cda/user/details/permissions/cda-user-details-permission-title.html"
                    },
                    cdaUserDetailsContent: {
                        templateUrl: "app/cda/user/details/permissions/cda-user-details-permission-list.html",
                        controller: "CdaUserDetailsPermissionListCtrl",
                        controllerAs: "CdaUserDetailsPermissionListCtrl"
                    }
                },
                translations: ["common", "cda/user/details/permissions"]
            });
    });
