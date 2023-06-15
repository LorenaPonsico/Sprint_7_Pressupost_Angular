import { Component, Input, Pipe } from '@angular/core';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent {

  @Input() budgets: any;

  // sortedBudgets: any;


  sortAlphabeticallyByCustomer() {
    this.budgets = [...this.budgets]; // copio los presupuesto
    console.log(this.budgets)

    this.budgets.sort((a: any, b: any) => a.customer.localeCompare(b.customer));
  } 

  
  sortByDate() {
    this.budgets = [...this.budgets]; // Hacer una copia de la lista original
  
    this.budgets.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      return dateA.getTime() - dateB.getTime();
    });
  }
  
  

  resetOrder() {
    this.budgets = null; 
   }

  constructor() { }

}


