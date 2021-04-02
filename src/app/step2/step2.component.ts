import { Component, OnInit } from '@angular/core';
import { ResumeData } from '../models/resumedata';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  resumeData: ResumeData;
  combinedContactNumber: string;
  cssValueForPageBreakInsideGithubProjects: string
  cssValueForPageBreakInsideLanguageProficiency: string        
  cssValueForPageBreakInsideExperienceData: string        
  cssValueForPageBreakInsideAcademicDegrees: string        
  cssValueForPageBreakInsideAcademicAchievements: string        
  cssValueForPageBreakInsideProfessionalAchievements: string     
  cssValueForPageBreakInsideReferences: string         

  constructor(private modalService: NgbModal) {

    this.combinedContactNumber = ""

    var tmp = localStorage.getItem("resumeData");
    if(tmp == null || tmp == undefined) tmp = ""

    //ref: https://www.w3schools.com/html/html5_webstorage.asp
    this.resumeData  = JSON.parse( tmp );

    if(this.resumeData.contactNumber2 != null && this.resumeData.contactNumber2 != ""){
      this.combinedContactNumber = this.resumeData.contactNumber1 + " / " + this.resumeData.contactNumber2;
    }
    else{
      this.combinedContactNumber = this.resumeData.contactNumber1;
    }

    for(var i = 0; i < this.resumeData.professionalExperience.length; i++){

      let tmp = this.resumeData.professionalExperience[i].employmentRoleDesc;
      let tmpArray = tmp.split("\n");
      this.resumeData.professionalExperience[i].employmentRoleDescAsArr = tmpArray

      let regExForDate = /^(\d){4}-(\d){2}-(\d){2}$/

      // ref: https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js
      if( regExForDate.test(this.resumeData.professionalExperience[i].employmentFrom) ){
        this.resumeData.professionalExperience[i].employmentFrom = this.convert_YYYYMMDD_to_DDMMMYYYY(this.resumeData.professionalExperience[i].employmentFrom);
      }
      if( regExForDate.test(this.resumeData.professionalExperience[i].employmentTo) ){
        this.resumeData.professionalExperience[i].employmentTo = this.convert_YYYYMMDD_to_DDMMMYYYY(this.resumeData.professionalExperience[i].employmentTo);
      }
    }

    this.cssValueForPageBreakInsideAcademicAchievements = this.resumeData.avoidPageBreakInsideAcademicAchievements == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideAcademicDegrees = this.resumeData.avoidPageBreakInsideAcademicDegrees == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideExperienceData = this.resumeData.avoidPageBreakInsideExperienceData == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideGithubProjects = this.resumeData.avoidPageBreakInsideGithubProjects == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideLanguageProficiency = this.resumeData.avoidPageBreakInsideLanguageProficiency == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideProfessionalAchievements = this.resumeData.avoidPageBreakInsideProfessionalAchievements == true ? "avoid" : "auto";                    
    this.cssValueForPageBreakInsideReferences = this.resumeData.avoidPageBreakInsideReferences == true ? "avoid" : "auto";    
  }

  setCssValues(){
    this.cssValueForPageBreakInsideAcademicAchievements = this.resumeData.avoidPageBreakInsideAcademicAchievements == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideAcademicDegrees = this.resumeData.avoidPageBreakInsideAcademicDegrees == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideExperienceData = this.resumeData.avoidPageBreakInsideExperienceData == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideGithubProjects = this.resumeData.avoidPageBreakInsideGithubProjects == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideLanguageProficiency = this.resumeData.avoidPageBreakInsideLanguageProficiency == true ? "avoid" : "auto";
    this.cssValueForPageBreakInsideProfessionalAchievements = this.resumeData.avoidPageBreakInsideProfessionalAchievements == true ? "avoid" : "auto";                    
    this.cssValueForPageBreakInsideReferences = this.resumeData.avoidPageBreakInsideReferences == true ? "avoid" : "auto";    
  }

  convert_YYYYMMDD_to_DDMMMYYYY(dateString: string){

    //ref: https://stackoverflow.com/questions/40354697/how-to-convert-yyyy-mm-dd-to-dd-mon-yyyy-with-month-name-using-javascript
    // the code below has been almost fully copied from the link above

    var date = new Date(dateString);

    if ( isNaN( date.getTime() ) ) 
    {
       return dateString;
    }
    
    var month = new Array();
     month[0] = "January";
     month[1] = "February";
     month[2] = "March";
     month[3] = "April";
     month[4] = "May";
     month[5] = "June";
     month[6] = "July";
     month[7] = "August";
     month[8] = "September";
     month[9] = "October";
     month[10] = "November";
     month[11] = "December";

     var day = date.getDate();

     var dayAsString = day + "";
     let regExEndsWith1 = /1$/
     let regExEndsWith11 = /11$/     
     let regExEndsWith2 = /2$/
     let regExEndsWith3 = /3$/     

     var suffix = ""
     if( regExEndsWith1.test(dayAsString) && !regExEndsWith11.test(dayAsString) ) suffix = "st"
     else if( regExEndsWith2.test(dayAsString) ) suffix = "nd"     
     else if( regExEndsWith3.test(dayAsString) ) suffix = "rd"          
     else suffix = "th"
          
     return    day + suffix + " " +month[date.getMonth()] + " " + date.getFullYear();          
  }

  ngOnInit(): void {
  }

  print(){
    window.print()
  }

  //ref: https://ng-bootstrap.github.io/#/components/modal/examples
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log("here 1")
      console.log(this.resumeData)
      this.setCssValues()
    }, (reason) => {
      console.log("here 2")
      console.log(this.resumeData)
      this.setCssValues()
    });
  }

}
