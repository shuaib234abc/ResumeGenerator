import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

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
}
