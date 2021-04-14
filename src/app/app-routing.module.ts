import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { LayoutfancyComponent } from './layoutfancy/layoutfancy.component';
import { LayoutstraightComponent } from './layoutstraight/layoutstraight.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';

//ref: https://angular.io/generated/live-examples/getting-started-v0/stackblitz
const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },  
  { path: 'layoutstraight', component: LayoutstraightComponent },  
  { path: 'layoutfancy', component: LayoutfancyComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
