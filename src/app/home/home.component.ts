import { Component } from '@angular/core';
import { BudgetService } from './services/budget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  public receivedValues: any;
  public totalPrice: number = 0;
  public showPanell: boolean = false;
  public resultPricePanell: number = 0;

  constructor(private budgetService: BudgetService) {}

  sumPrice() {
    this.totalPrice = 0;
    const checkbox1 = document.getElementById('checkbox1') as HTMLInputElement;
    const checkbox2 = document.getElementById('checkbox2') as HTMLInputElement;
    const checkbox3 = document.getElementById('checkbox3') as HTMLInputElement;

    if (checkbox1.checked) {
      this.totalPrice += 500;
      this.showPanell = true
    }
    else {
      this.showPanell = false
    }

    if (checkbox2.checked) {
      this.totalPrice += 300;
    }

    if (checkbox3.checked) {
      this.totalPrice += 200;
    }
  }

  handleValuesFromChild(values: any) {
    const web = values.web;
    const language = values.language;

    if (web >= 0 && language >= 0) {
      this.totalPrice -= this.resultPricePanell
      this.resultPricePanell = this.budgetService.calculateBudget(web, language);
      this.totalPrice += this.resultPricePanell
    }
  }
}
