import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {
  @Output() valuesForm = new EventEmitter<any>();

  public resultadoInputWeb: number = 0;
  public resultadoInputLanguage: number = 0;
  public webValue: number = 0;
  public languageValue: number = 0;

  myForm!: FormGroup;

  constructor(private _builder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._builder.group({
      web: ["0", Validators.required],
      language: ["0", Validators.required]
    });

    this.myForm.valueChanges.subscribe(values => {
      this.valuesForm.emit(values);
    });
  }

  incrementValueWebs() {
    const webValue = this.myForm.get('web')?.value;
    // Verifica si el valor es un número válido
    if (!isNaN(webValue)) {
      // Suma el valor de 'web' a la variable webValue del componente
      this.webValue++;
      // Actualiza el resultado de la suma en el input
      this.resultadoInputWeb = this.webValue;
      this.myForm.setValue({ 'web': this.resultadoInputWeb, 'language': this.resultadoInputLanguage })
    }
  }

  decrementValueWebs() {
    const webValue = this.myForm.get('web')?.value;

    if (!isNaN(webValue)) {
      this.webValue--;
      this.resultadoInputWeb = this.webValue;
      this.myForm.setValue({ 'web': this.resultadoInputWeb, 'language': this.resultadoInputLanguage })
    }
  }

  incrementValueLanguage() {
    const languageValue = this.myForm.get('language')?.value;

    if (!isNaN(languageValue)) {
      this.languageValue++;
      this.resultadoInputLanguage = this.languageValue;
      this.myForm.setValue({ 'web': this.resultadoInputWeb, 'language': this.resultadoInputLanguage, })
    }
  }

  decrementValueLanguage() {
    const languageValue = this.myForm.get('language')?.value;

    if (!isNaN(languageValue)) {
      this.languageValue--;
      this.resultadoInputLanguage = this.languageValue;
      this.myForm.setValue({ 'web': this.resultadoInputWeb, 'language': this.resultadoInputLanguage, })
    }
  }
}