function AppController(AuthService, $state) {
    var ctrl = this;
    ctrl.user = AuthService.getUser();
    ctrl.logout = function () {

    };
}

angular
    .module('common')
    .controller('AppController', AppController);