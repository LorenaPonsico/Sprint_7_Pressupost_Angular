import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public totalPrice: number = 0;
  public showPanell: boolean = false;

  sumPrice() {

    this.totalPrice = 0;
    
    const checkbox1 = document.getElementById('checkbox1') as HTMLInputElement;
    const checkbox2 = document.getElementById('checkbox2') as HTMLInputElement;
    const checkbox3 = document.getElementById('checkbox3') as HTMLInputElement;
    
    if (checkbox1.checked) {
      this.totalPrice += 500;
      this.showPanell = true
    }
    else{
      this.showPanell = false
    }
    
    if (checkbox2.checked) {
      this.totalPrice += 300;
    }
    
    if (checkbox3.checked) {
      this.totalPrice += 200;
    }
  }
  
  constructor() {}
}
