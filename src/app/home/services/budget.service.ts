import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budgets: any[] = [];

  calculateBudget(web: number, language: number) {
    const additionalBudget = web * language * 30;
    return additionalBudget;
  }


  // ARRAY DE PRESUPUESTOS
 addBudgets(budget: any){
  this.budgets.push(budget);
  console.log(this.budgets)
 }
  
  constructor() { }

}
