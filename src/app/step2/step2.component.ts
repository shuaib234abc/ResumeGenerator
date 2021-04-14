/*
References for reactive forms (form part)
1. https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/
2. https://www.tutsmake.com/angular-11-reactive-forms-validation-tutorial-example/
3. https://hdtuto.com/article/angular-11-forms-validation-example
4. https://www.remotestack.io/angular-reactive-forms-validation-tutorial-example/
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  /* ref: https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/ */    
  dataForm: FormGroup;
  submitted = false;

  initForm(){
    
  }  

  //ref: https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/
  onDataFormSubmit() {

    this.submitted = true;
    if (this.dataForm.valid) {
      var layout = this.dataFormControls.layout.value

      // ref: https://stackoverflow.com/questions/47133610/angular-manual-redirect-to-route
      if(layout == "straightforward"){
        this.router.navigate(['/layoutstraight'])
      }
      else if(layout == "fancy"){
        this.router.navigate(['/layoutfancy'])
      }
    }    

  }

  get dataFormControls(){
    return this.dataForm.controls;
  }

  constructor(private router: Router) { 
      
    //ref: https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/
    this.dataForm = new FormGroup({
        layout: new FormControl('', Validators.required),                                                                                                                        
      }
    );
  }

  ngOnInit(): void {

  }

}
