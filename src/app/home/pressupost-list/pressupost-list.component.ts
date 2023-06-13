import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent {

  constructor(private budgetService: BudgetService){}

//   reinicialitzarOrdre() {
//     this.pressupostos = this.budgetService.getPressupostos();
//     this.ordreAlfabetic = false;
//     this.ordreData = false;
// }

}
