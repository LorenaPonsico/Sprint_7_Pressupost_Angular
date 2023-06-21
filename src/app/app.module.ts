import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BudgetService } from './home/services/budget.service';
import { PanellComponent } from './home/panell/panell.component';
import { PressupostListComponent } from './home/pressupost-list/pressupost-list.component';
import { WelcomeComponent } from './welcome/welcome.component'
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    WelcomeComponent,
    ModalComponent,
    PressupostListComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent], 
})
export class AppModule { }
