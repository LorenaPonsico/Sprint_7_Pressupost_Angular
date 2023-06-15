import { Component, Input} from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent {

  @Input() budgets: any;
  originalBudgets: any; // presupuestos originales

  constructor(private budgetService: BudgetService) { }

  ngOnInit() {
    this.originalBudgets = this.budgetService.getBudgets(); // Obtener los presupuestos del servicio
  }

  sortAlphabeticallyByCustomer() {
    this.budgets = [...this.budgets]; // copio los presupuesto

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
    this.budgets = [...this.originalBudgets]; // Restaurar los presupuestos a su estado original
  }

}


