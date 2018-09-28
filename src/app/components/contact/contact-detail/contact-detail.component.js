var contactDetail = {
    bindings: {
        contact: '<',
        onSave: '&',
        onUpdate: '&',
        onDelete: '&'
    },
    templateUrl: './contact-detail.html',
    controllers: 'ContactDetailController'
};

angular
    .module('components.contact')
    .component('contactDetail', contactDetail);