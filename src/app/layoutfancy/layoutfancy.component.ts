import { Component, OnInit } from '@angular/core';
import { ResumeData } from '../models/resumedata';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-layoutfancy',
  templateUrl: './layoutfancy.component.html',
  styleUrls: ['./layoutfancy.component.css']
})
export class LayoutfancyComponent implements OnInit {

  resumeData: ResumeData;
  combinedContactNumber: string;
  cssValueForPageBreakInsideGithubProjects: string
  cssValueForPageBreakInsideLanguageProficiency: string        
  cssValueForPageBreakInsideExperienceData: string        
  cssValueForPageBreakInsideAcademicDegrees: string        
  cssValueForPageBreakInsideAcademicAchievements: string        
  cssValueForPageBreakInsideProfessionalAchievements: string     
  cssValueForPageBreakInsideReferences: string         

  constructor(private modalService: NgbModal, private service: CommonService) {

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
        this.resumeData.professionalExperience[i].employmentFrom = service.convert_YYYYMMDD_to_DDMMMYYYY(this.resumeData.professionalExperience[i].employmentFrom);
      }
      if( regExForDate.test(this.resumeData.professionalExperience[i].employmentTo) ){
        this.resumeData.professionalExperience[i].employmentTo = service.convert_YYYYMMDD_to_DDMMMYYYY(this.resumeData.professionalExperience[i].employmentTo);
      }
    }

    for(var i = 0; i < this.resumeData.languageProficiency.length; i++){
      let tmp = this.resumeData.languageProficiency[i].name;
      let tmpArray = tmp.split(", ");
      this.resumeData.languageProficiency[i].names = tmpArray
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
