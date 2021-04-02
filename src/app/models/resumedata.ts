import { AcademicAchievement } from "./academicachievement"
import { AcademicData } from "./academicdata"
import { ExperienceData } from "./experiencedata"
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
        professionalExperience!: ExperienceData[]
        academicDegrees!: AcademicData[]
        academicAchievements!: AcademicAchievement[]
        professionalAchievements!: ProfessionalAchievement[]        
        references!: Reference[]

        constructor() { 
                this.professionalExperience = [];
                this.academicDegrees = [];
                this.academicAchievements = [];
                this.professionalAchievements = [];
                this.references = [];
        }

}