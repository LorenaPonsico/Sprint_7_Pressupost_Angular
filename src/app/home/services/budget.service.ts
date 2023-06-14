import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budgets: any[] = [];
  // ARRAY DE PRESUPUESTOS

  calculateBudget(web: number, language: number) {
    const additionalBudget = web * language * 30;
    return additionalBudget;
  } // calcular precio numero de paginas y idioma (panellComponent)

  addBudgets(budget: any): void {
    this.budgets.push(budget);
  } // añadir presupuestos (listComponent)

  getBudgets(): any[] {
    return this.budgets;
  } // coger presupuestos (listComponent)

  constructor() { }

}
