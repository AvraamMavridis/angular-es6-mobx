import angular from 'angular';
import List    from './list/list';

let componentModule = angular.module('app.components', [
  List.name,
]);

export default componentModule;
