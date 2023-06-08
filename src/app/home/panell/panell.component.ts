import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../services/budget.service';


@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {
  @Output() valuesForm = new EventEmitter<any>();

  myForm!: FormGroup;

  constructor(private _builder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._builder.group({
      web: ["", Validators.required],
      language: ["", Validators.required]
    });

    this.myForm.valueChanges.subscribe(values => {
      this.valuesForm.emit(values);
    });
  }
}