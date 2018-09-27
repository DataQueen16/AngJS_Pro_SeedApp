var contactDetail = {
    bindings: {
        contact: '<',
        onSave: '&'
    },
    templateUrl: './contact-detail.html',
    controllers: 'ContactDetailController'
};

angular
    .module('components.contact')
    .component('contactDetail', contactDetail);