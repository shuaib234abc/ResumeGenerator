import { AcademicAchievement } from "./academicachievement"
import { AcademicData } from "./academicdata"
import { ExperienceData } from "./experiencedata"
import { GithubProject } from "./githubproject"
import { LanguageProficiency } from "./languageproficiency"
import { ProfessionalAchievement } from "./professionalachievement"
import { Reference } from "./reference"

export class ResumeData {

        fullName!: string
        emailAddr!: string
        contactNumber1!: string
        contactNumber2!: string
        mailingAddr!: string
        photo!: any
        careerObjective!: string
        careerSummary!: string        
        linkedInProfleLink!: string
        skypeName!: string
        hackerRankProfileLink!: string
        githubProfileLink!: string
        upworkProfileLink!: string
        githubProjects!: GithubProject[]
        avoidPageBreakInsideGithubProjects: boolean
        languageProficiency!: LanguageProficiency[]
        avoidPageBreakInsideLanguageProficiency: boolean        
        professionalExperience!: ExperienceData[]
        avoidPageBreakInsideExperienceData: boolean        
        academicDegrees!: AcademicData[]
        avoidPageBreakInsideAcademicDegrees: boolean        
        academicAchievements!: AcademicAchievement[]
        avoidPageBreakInsideAcademicAchievements: boolean        
        professionalAchievements!: ProfessionalAchievement[]        
        avoidPageBreakInsideProfessionalAchievements: boolean        
        references!: Reference[]
        avoidPageBreakInsideReferences: boolean        

        constructor() { 
                this.professionalExperience = [];
                this.academicDegrees = [];
                this.academicAchievements = [];
                this.professionalAchievements = [];
                this.references = [];
                this.githubProjects = [];
                this.languageProficiency = [];   
                
                this.avoidPageBreakInsideGithubProjects = false
                this.avoidPageBreakInsideLanguageProficiency = false
                this.avoidPageBreakInsideExperienceData = false
                this.avoidPageBreakInsideAcademicDegrees = false
                this.avoidPageBreakInsideAcademicAchievements = false
                this.avoidPageBreakInsideProfessionalAchievements = false
                this.avoidPageBreakInsideReferences = false                                                                
        }

}