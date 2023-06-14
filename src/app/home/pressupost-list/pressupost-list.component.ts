import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent  {

  @Input() budgets: any;

  constructor() { }

}


