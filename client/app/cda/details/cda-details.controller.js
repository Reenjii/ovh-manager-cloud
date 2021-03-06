angular.module("managerApp")
    .controller("CdaDetailsCtrl", function ($stateParams, $translate, CdaService, CloudMessage, URLS, OvhApiMe) {
        "use strict";

        const self = this;

        self.CdaService = CdaService;
        self.serviceName = "";
        self.messages = [];

        self.loading = true;

        self.guides = {
            title: $translate.instant("cda_guide_title"),
            list: [{
                name: $translate.instant("cda_guide_name")
            }],
            footer: $translate.instant("cda_guide_footer")
        };

        self.refreshMessage = function () {
            self.messages = self.messageHandler.getMessages();
        };

        self.loadMessage = function () {
            CloudMessage.unSubscribe("paas.cda");
            self.messageHandler = CloudMessage.subscribe("paas.cda", { onMessage: () => self.refreshMessage() });
        };

        self.loadGuides = function () {
            return OvhApiMe.v6()
                .get().$promise
                .then(me => {
                    self.guides.list[0].url = `${URLS.guides.home[me.ovhSubsidiary]}${URLS.guides.cda}`;
                })
                .catch(error => {
                    CloudMessage.error(`${$translate.instant("cda_guide_retrieval_error")} ${_(error).get("data.message", "")}`);
                });
        };

        function init () {
            self.serviceName = $stateParams.serviceName;

            self.loadMessage();
            self.loadGuides();
        }

        init();
    });
