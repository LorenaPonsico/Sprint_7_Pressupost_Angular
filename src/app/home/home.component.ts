import { Component, OnInit } from '@angular/core';
import { BudgetService } from './services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public totalPrice: number = 0;
  public showPanell: boolean = false;
  public resultPricePanell: number = 0;

  public nameBudget: string = "";
  public customer: string = "";
  public date: string = "";
  public budgets: any[] = [];

  public checkbox1Checked: boolean = false;
  public checkbox2Checked: boolean = false;
  public checkbox3Checked: boolean = false;
  budgetForm: any;

  constructor(private budgetService: BudgetService, private router: Router) { }

  ngOnInit() { // se ejecuta cuando se renderiza/carga el componente home
    this.budgets = this.budgetService.getBudgets();
  }

  sumPrice() {

    this.totalPrice = 0;

    if (this.checkbox1Checked) {
      this.totalPrice += 500;
      this.showPanell = true;
    } else {
      this.showPanell = false;
    }

    if (this.checkbox2Checked) {
      this.totalPrice += 300;
    }

    if (this.checkbox3Checked) {
      this.totalPrice += 200;
    }

    if (this.showPanell) {
      this.totalPrice += this.resultPricePanell;
    }
  }

  takeValuePanell(values: any) {
    const web = values.web;
    const language = values.language;

    if (web >= 0 && language >= 0) {
      this.totalPrice -= this.resultPricePanell
      this.resultPricePanell = this.budgetService.calculateBudget(web, language);
      this.totalPrice += this.resultPricePanell
    }
  }

  backWelcome() {
    this.router.navigate([""])
  }


  sendBudget() {
    const budget = {
      name: this.nameBudget,
      customer: this.customer,
      date: this.date,
      price: this.totalPrice,
      checkbox1: this.checkbox1Checked,
      checkbox2: this.checkbox2Checked,
      checkbox3: this.checkbox3Checked,
      panell: this.resultPricePanell
    };

    this.budgetService.addBudgets(budget);
  }
}
