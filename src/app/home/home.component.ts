import { Component } from '@angular/core';
import { BudgetService } from './services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  public totalPrice:        number = 0;
  public showPanell:        boolean = false;
  public resultPricePanell: number = 0;


  // pressupostos: any[] = [];
  // nomPressupost: string = "";
  // client: string = "";



  constructor(private budgetService: BudgetService, private router: Router) { 
   
  }

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

    if (this.showPanell) {
      this.totalPrice += this.resultPricePanell;
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

  backWelcome() {
    this.router.navigate([""])
  }


  enviarPresupuesto() {
    // const pressupost = {
    //     nom: this.nomPressupost,
    //     client: this.client,
    //     servei: this.serveiSeleccionat,
    //     preu: this.total + this.precioTotal,
    //     data: this.data,
    // };
    // console.log("Pressupost:", pressupost);
    // this.resultService.addBudget(pressupost);

//     // Reiniciar los valores de los inputs después de enviar el presupuesto
//     this.nomPressupost = "";
//     this.client = "";
//     this.serveiSeleccionat = [];
//     this.total = 0;
//     this.precioTotal = 0;
// }



}
}
