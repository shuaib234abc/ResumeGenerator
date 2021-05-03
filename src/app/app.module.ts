import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutstraightComponent } from './layoutstraight/layoutstraight.component';
import { LayoutfancyComponent } from './layoutfancy/layoutfancy.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    IntroductionComponent,
    Step1Component,
    Step2Component,
    LayoutstraightComponent,
    LayoutfancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
