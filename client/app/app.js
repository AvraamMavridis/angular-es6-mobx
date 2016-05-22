import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
//import Components   from './components/components';
import AppComponent from './app.component';
import MyAppRouter  from './router';
import 'normalize.css';

import List from './components/list/list';

angular.module('app', [
    uiRouter,
    MyAppRouter.name,
    List.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component( 'app', AppComponent );
