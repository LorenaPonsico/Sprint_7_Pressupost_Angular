import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './home/panell/panell.component';
import { BudgetService } from './home/services/budget.service';
import{ ReactiveFormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component'
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
