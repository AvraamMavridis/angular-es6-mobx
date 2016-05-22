import { autorun } from 'mobx';

class Controller {
  constructor( expensesService ) {
    this.expensesService = expensesService;
  }

  $onInit()
  {
    autorun(() => {
      this.list = this.expensesService.list;
      this.listCounter = this.expensesService.list.length;
    })
  }

  addItem()
  {
    this.list.push({ value: Math.random(), category:'someethig'});
  }

  deleteItem( item, $index )
  {
    this.list.splice( $index, 1 )
  }
}

Controller.$inject = ['expensesService'];

export default Controller;
