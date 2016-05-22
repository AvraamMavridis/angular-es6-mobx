import angular  from 'angular';
import template from './listItem.html';

const listModule = angular.module('listItem', [
])
.component('list', {
    restrict: 'E',
    bindings: {},
    template
} );

export default listModule;
