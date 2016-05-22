import './list.css';
import angular    from 'angular';
import template   from './list.html';
import controller from './listController';

const listModule = angular.module('list', [
])
.component('list', {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs : 'listController'
} );

export default listModule;
