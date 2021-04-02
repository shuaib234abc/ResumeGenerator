/*
References for reactive forms (form part)
1. https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/
2. https://www.tutsmake.com/angular-11-reactive-forms-validation-tutorial-example/
3. https://hdtuto.com/article/angular-11-forms-validation-example
4. https://www.remotestack.io/angular-reactive-forms-validation-tutorial-example/
*/

import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResumeData } from '../models/resumedata';
import { ExperienceData } from '../models/experiencedata';
import { AcademicData } from '../models/academicdata';
import { AcademicAchievement } from '../models/academicachievement';
import { ProfessionalAchievement } from '../models/professionalachievement';
import { Reference } from '../models/reference';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LanguageProficiency } from '../models/languageproficiency';
import { GithubProject } from '../models/githubproject';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  /* ref: https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/ */    
  dataForm: FormGroup;
  resumeData: ResumeData;
  generateDataLinkClicked : boolean
  downloadLinkClicked : boolean
  downloadJsonHref : SafeUrl
  uploadJsonFile!: File

  initForm(){
    
  }  

  photoFormControlChanged(event: any){
   //ref: https://stackoverflow.com/questions/53129002/converting-image-to-base64-string-in-typescript/53129416
   let __thisObj = this;
   let file = event.target.files[0];
   let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     __thisObj.resumeData.photo = reader.result;
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
  }

  //ref: https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/
  onDataFormSubmit() {
    
    this.resumeData.careerObjective = this.dataFormControls.careerObjective.value
    this.resumeData.careerSummary = this.dataFormControls.careerSummary.value
    this.resumeData.contactNumber1 = this.dataFormControls.contactNumber1.value
    this.resumeData.contactNumber2 = this.dataFormControls.contactNumber2.value
    this.resumeData.emailAddr = this.dataFormControls.emailAddr.value
    this.resumeData.fullName = this.dataFormControls.fullName.value
    this.resumeData.mailingAddr = this.dataFormControls.mailingAddr.value    
    this.resumeData.linkedInProfleLink = this.dataFormControls.linkedInProfleLink.value
    this.resumeData.skypeName = this.dataFormControls.skypeName.value
    this.resumeData.hackerRankProfileLink = this.dataFormControls.hackerRankProfileLink.value
    this.resumeData.githubProfileLink = this.dataFormControls.githubProfileLink.value
    this.resumeData.upworkProfileLink = this.dataFormControls.upworkProfileLink.value    
    
    // ref: https://www.w3schools.com/html/html5_webstorage.asp
    localStorage.setItem("resumeData", JSON.stringify( this.resumeData ));

    // ref: https://stackoverflow.com/questions/47133610/angular-manual-redirect-to-route
    this.router.navigate(['/step2'])

  }

  deleteGithubPrj(event: any, index: number){
    this.resumeData.githubProjects.splice(index, 1)
  }

  addGithubPrj(event: any){
    let __data = new GithubProject()
    __data.projectTitle = this.dataFormControls.githubPrjTitle.value
    __data.link = this.dataFormControls.githubPrjLink.value
    __data.description = this.dataFormControls.githubPrjDesc.value    
    __data.technologyUsed = this.dataFormControls.githubPrjTechUsed.value               

    this.resumeData.githubProjects.push(__data)

    this.dataFormControls.githubPrjTitle.setValue('')
    this.dataFormControls.githubPrjLink.setValue('')
    this.dataFormControls.githubPrjDesc.setValue('')
    this.dataFormControls.githubPrjTechUsed.setValue('')    
  }

  deleteLanguageProficiency(event: any, index: number){
    this.resumeData.languageProficiency.splice(index, 1)
  }

  addLanguageProficiency(event: any){
    let __data = new LanguageProficiency()
    __data.name = this.dataFormControls.languageProficiencyName.value
    __data.type = this.dataFormControls.languageProficiencyType.value               

    this.resumeData.languageProficiency.push(__data)

    this.dataFormControls.languageProficiencyName.setValue('')
    this.dataFormControls.languageProficiencyType.setValue('')
  }

  deleteReference(event: any, index: number){
    this.resumeData.references.splice(index, 1)
  }

  addReference(event: any){
    let __data = new Reference()
    __data.referenceCompany = this.dataFormControls.referenceCompany.value
    __data.referenceContactNumber = this.dataFormControls.referenceContactNumber.value
    __data.referenceDesignation = this.dataFormControls.referenceDesignation.value
    __data.referenceEmailAddr = this.dataFormControls.referenceEmailAddr.value            
    __data.referenceName = this.dataFormControls.referenceName.value
    __data.referenceRelationTo = this.dataFormControls.referenceRelationTo.value          

    this.resumeData.references.push(__data)

    this.dataFormControls.referenceCompany.setValue('')
    this.dataFormControls.referenceContactNumber.setValue('')
    this.dataFormControls.referenceDesignation.setValue('')
    this.dataFormControls.referenceEmailAddr.setValue('')
    this.dataFormControls.referenceName.setValue('')
    this.dataFormControls.referenceRelationTo.setValue('')
  }

  deleteProfessionalAchievement(event: any, index: number){
    this.resumeData.professionalAchievements.splice(index, 1)
  }

  addProfessionalAchievement(event: any){
    let __data = new ProfessionalAchievement()
    __data.professionalAchievementDesc = this.dataFormControls.professionalAchievementDesc.value
    __data.professionalAchievementTitle = this.dataFormControls.professionalAchievementTitle.value
    __data.professionalAchievementYear = this.dataFormControls.professionalAchievementYear.value          

    this.resumeData.professionalAchievements.push(__data)

    this.dataFormControls.professionalAchievementDesc.setValue('')
    this.dataFormControls.professionalAchievementTitle.setValue('')
    this.dataFormControls.professionalAchievementYear.setValue('')
  }

  deleteAcademicAchievement(event: any, index: number){
    this.resumeData.academicAchievements.splice(index, 1)
  }

  addAcademicAchievement(event: any){
    let __data = new AcademicAchievement()
    __data.academicAchievementDesc = this.dataFormControls.academicAchievementDesc.value
    __data.academicAchievementTitle = this.dataFormControls.academicAchievementTitle.value
    __data.academicAchievementYear = this.dataFormControls.academicAchievementYear.value          

    this.resumeData.academicAchievements.push(__data)

    this.dataFormControls.academicAchievementDesc.setValue('')
    this.dataFormControls.academicAchievementTitle.setValue('')
    this.dataFormControls.academicAchievementYear.setValue('')
  }

  deleteAcademicDegree(event: any, index: number){
    this.resumeData.academicDegrees.splice(index, 1)
  }

  addAcademicDegree(event: any){
    let __data = new AcademicData()
    __data.academicExamTitle = this.dataFormControls.academicExamTitle.value
    __data.academicInstitution = this.dataFormControls.academicInstitution.value
    __data.academicPassingYear = this.dataFormControls.academicPassingYear.value    
    __data.academicResult = this.dataFormControls.academicResult.value               

    this.resumeData.academicDegrees.push(__data)

    this.dataFormControls.academicExamTitle.setValue('')
    this.dataFormControls.academicInstitution.setValue('')
    this.dataFormControls.academicPassingYear.setValue('')
    this.dataFormControls.academicResult.setValue('')    
  }

  deleteExp(event: any, index: number){
    this.resumeData.professionalExperience.splice(index, 1)
  }

  addExp(event: any){
    let expData = new ExperienceData()
    expData.companyName = this.dataFormControls.companyName.value
    expData.companyLocation = this.dataFormControls.companyLocation.value
    expData.employmentFrom = this.dataFormControls.employmentFrom.value
    
    var currentlyWorkingVal = this.dataFormControls.employmentCurrentWorking.value
    if(currentlyWorkingVal == true || currentlyWorkingVal == "true"){
      expData.employmentTo = "currently working"      
    }
    else expData.employmentTo = this.dataFormControls.employmentTo.value

    expData.designationHeld = this.dataFormControls.designationHeld.value        
    expData.employmentRoleDesc = this.dataFormControls.employmentRoleDesc.value        

    this.resumeData.professionalExperience.push(expData)

    this.dataFormControls.companyName.setValue('')
    this.dataFormControls.companyLocation.setValue('')
    this.dataFormControls.employmentFrom.setValue('')
    this.dataFormControls.employmentTo.setValue('')
    this.dataFormControls.employmentCurrentWorking.setValue('')
    this.dataFormControls.designationHeld.setValue('')        
    this.dataFormControls.employmentRoleDesc.setValue('')    
  }

  get dataFormControls(){
    return this.dataForm.controls;
  }

  constructor(private router: Router, private sanitizer: DomSanitizer) { 
    this.generateDataLinkClicked = false
    this.downloadLinkClicked = false
    this.downloadJsonHref = ""

    this.resumeData = new ResumeData()

    //ref: https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/
    this.dataForm = new FormGroup({
        fullName: new FormControl(''),
        emailAddr: new FormControl(''),
        contactNumber1: new FormControl(''),
        contactNumber2: new FormControl(''),
        mailingAddr: new FormControl(''),
        photo: new FormControl(''),
        careerObjective: new FormControl(''),
        careerSummary: new FormControl(''),
        linkedInProfleLink: new FormControl(''),
        skypeName: new FormControl(''),
        hackerRankProfileLink: new FormControl(''),
        githubProfileLink: new FormControl(''),
        upworkProfileLink: new FormControl(''),
        companyName: new FormControl(''),
        companyLocation: new FormControl(''),
        designationHeld: new FormControl(''),
        employmentFrom: new FormControl(''),
        employmentTo: new FormControl(''),
        employmentRoleDesc: new FormControl(''),
        employmentCurrentWorking: new FormControl(''),
        academicExamTitle: new FormControl(''),
        academicInstitution: new FormControl(''),
        academicResult: new FormControl(''),
        academicPassingYear: new FormControl(''),
        academicAchievementTitle: new FormControl(''),
        academicAchievementDesc: new FormControl(''),
        academicAchievementYear: new FormControl(''),
        professionalAchievementTitle: new FormControl(''),
        professionalAchievementDesc: new FormControl(''),
        professionalAchievementYear: new FormControl(''),
        referenceName: new FormControl(''),
        referenceDesignation: new FormControl(''),
        referenceCompany: new FormControl(''),
        referenceRelationTo: new FormControl(''),
        referenceEmailAddr: new FormControl(''),
        referenceContactNumber: new FormControl(''),  
        languageProficiencyName: new FormControl(''),
        languageProficiencyType: new FormControl(''),
        githubPrjTitle: new FormControl(''),
        githubPrjLink: new FormControl(''),
        githubPrjDesc: new FormControl(''),
        githubPrjTechUsed: new FormControl(''),                                                                                                                        
      }
    );
  }

  ngOnInit(): void {
    this.generateDataLinkClicked = false
    this.downloadLinkClicked = false
  }

  generateFile(){

    this.resumeData.careerObjective = this.dataFormControls.careerObjective.value
    this.resumeData.careerSummary = this.dataFormControls.careerSummary.value
    this.resumeData.contactNumber1 = this.dataFormControls.contactNumber1.value
    this.resumeData.contactNumber2 = this.dataFormControls.contactNumber2.value
    this.resumeData.emailAddr = this.dataFormControls.emailAddr.value
    this.resumeData.fullName = this.dataFormControls.fullName.value
    this.resumeData.mailingAddr = this.dataFormControls.mailingAddr.value  
    this.resumeData.linkedInProfleLink = this.dataFormControls.linkedInProfleLink.value
    this.resumeData.skypeName = this.dataFormControls.skypeName.value
    this.resumeData.hackerRankProfileLink = this.dataFormControls.hackerRankProfileLink.value
    this.resumeData.githubProfileLink = this.dataFormControls.githubProfileLink.value
    this.resumeData.upworkProfileLink = this.dataFormControls.upworkProfileLink.value        

    this.generateDataLinkClicked = true
    this.downloadLinkClicked = false

    //ref: https://stackoverflow.com/questions/42360665/angular2-to-export-download-json-file
    var theJSON = JSON.stringify(this.resumeData);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

  downloadFile(){
    this.generateDataLinkClicked = false
    this.downloadLinkClicked = false
  }

  onUploadedJsonFileChanged(event: any){
    //ref: https://stackoverflow.com/questions/54971238/upload-json-file-using-angular-6
    this.uploadJsonFile = event.target.files[0];  
  }

  processUploadedJson(){
    this.generateDataLinkClicked = false
    this.downloadLinkClicked = false

    //ref: https://stackoverflow.com/questions/54971238/upload-json-file-using-angular-6
    const fileReader = new FileReader();
    fileReader.readAsText(this.uploadJsonFile, "UTF-8");
    fileReader.onload = () => {

      var fileReadResult = fileReader.result?.toString();
      if(fileReadResult == null || fileReadResult == undefined) fileReadResult = ""
      var jsonData = JSON.parse(fileReadResult)

      var resumeDataAsDefaultObj = jsonData
      
      //ref: https://stackoverflow.com/questions/5873624/parse-json-string-into-a-particular-object-prototype-in-javascript
      this.resumeData = Object.assign(new ResumeData, resumeDataAsDefaultObj)

      this.dataFormControls.fullName.setValue(this.resumeData.fullName)
      this.dataFormControls.emailAddr.setValue(this.resumeData.emailAddr)
      this.dataFormControls.contactNumber1.setValue(this.resumeData.contactNumber1)
      this.dataFormControls.contactNumber2.setValue(this.resumeData.contactNumber2)
      this.dataFormControls.mailingAddr.setValue(this.resumeData.mailingAddr)
      this.dataFormControls.careerObjective.setValue(this.resumeData.careerObjective)
      this.dataFormControls.careerSummary.setValue(this.resumeData.careerSummary)
      this.dataFormControls.linkedInProfleLink.setValue(this.resumeData.linkedInProfleLink)
      this.dataFormControls.skypeName.setValue(this.resumeData.skypeName)
      this.dataFormControls.hackerRankProfileLink.setValue(this.resumeData.hackerRankProfileLink)
      this.dataFormControls.githubProfileLink.setValue(this.resumeData.githubProfileLink)
      this.dataFormControls.upworkProfileLink.setValue(this.resumeData.upworkProfileLink)

    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

}
