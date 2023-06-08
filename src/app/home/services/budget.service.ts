import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  calculateBudget(web: number, language: number) {
    const additionalBudget = web * language * 30;
    return additionalBudget;
  }

  constructor() {}

}
