import angular  from 'angular';
import List     from './list/list';
import ListItem from './listItem/listItem'

let componentModule = angular.module('app.components', [
  List.name,
  ListItem.name,
]);

export default componentModule;
