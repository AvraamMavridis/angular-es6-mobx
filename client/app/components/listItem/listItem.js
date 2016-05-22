import angular    from 'angular';
import template   from './listItem.html';
import controller from './ListItemController';

const listModule = angular.module('listItem', [
])
.component('listItem', {
    restrict: 'E',
    bindings: {
      item : '<',
      index: '<',
      deleteItem: '&'
    },
    template,
    controller
} );

export default listModule;
