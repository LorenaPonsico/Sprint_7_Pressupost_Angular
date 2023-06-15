import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent  {

  @Input() budgets: any;


  sortAlphabetically(){
    if (this.budgets.length > 0) {
      this.budgets.sort((a: any, b: any) => a.customer.localeCompare(b.customer));
    }

  }

  constructor() { }

}


