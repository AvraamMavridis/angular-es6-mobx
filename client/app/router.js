import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import HomeTemplate from './templates/home.html';

const MyAppRouter = angular.module('MyAppRouter', [ uiRouter ]).config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('home', {
      url: '/',
      template: HomeTemplate
    });
});

export default MyAppRouter;
