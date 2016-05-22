import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import Components      from './components/components';
import AppComponent    from './app.component';
import MyAppRouter     from './router';
import ExpensesService from './services/ExpensesService.js';
import 'normalize.css';

import List from './components/list/list';

angular.module('app', [
    uiRouter,
    MyAppRouter.name,
    Components.name,
    ExpensesService.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component( 'app', AppComponent );
