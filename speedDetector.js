//function accept a speed input

//should return ok if speed <= 70 it should return "OK"
//Return the number of demerit points per 5km/h over the speed limit which is 70km/h
//For every 5 km/h driver is issued one demerit point
//Should return suspend license if total demerit points exceed 12 points
function speedDetector(speedInput){
    let output = ""
    let demerits;

    if(speedInput < 0){
        output = "IntegerError"
    }

    else if(speedInput >= 0 && speedInput <= 70){
        output = "Ok"
    }else{
        let point = 1;
         let cluster = 5;

         let speedAboveLimit = speedInput - 70;

          demeritPoints = Math.floor(speedAboveLimit / cluster)

          if(demeritPoints > 12){
            output = "License Suspended ;" + "Total demerit points :" + demeritPoints;
          }
    }
    return output;

}
