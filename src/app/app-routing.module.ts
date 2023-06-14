import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { PressupostListComponent } from './home/pressupost-list/pressupost-list.component';

const appRoutes: Routes=[

  {path:"", component:WelcomeComponent},
  {path:"home", component:HomeComponent},
  {path:"modal", component:ModalComponent},
  { path: "presupuestos", component: PressupostListComponent } 
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
