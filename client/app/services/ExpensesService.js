import angular        from 'angular'
import { observable } from 'mobx'

export default angular.module( 'expensesService', [] )
.factory('expensesService', () => observable( {
    list: [ { value: 10, category: 'something'}]
  }
));
