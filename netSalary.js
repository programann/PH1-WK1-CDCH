let classTax= 0;
let grossIncome = 0; 
let classWidth = 0;
let netSalary = 0;

//
//Calculation of grossIncome after  NHIF and NSSF deductions to give taxableIncome
function salary(grossSalary){

    if(grossSalary > 0 && grossSalary <= 24000){
        classTax = grossSalary*0.1 - 2400;
        grossIncome = grossSalary - classTax;
    }else if(grossSalary >= 24001 && grossSalary <= 32333){
        classWidth = grossSalary - 24000;
        classTax = 2400 + ( classWidth * 0.25) - 2400;
       grossIncome= grossSalary - classTax;
    }else if(grossSalary >= 32334 && grossSalary <= 500000){
        classWidth = grossSalary - 32333;
        classTax = 4483.25 + ( classWidth * 0.3) - 2400;
        grossIncome = grossSalary - classTax;
    }else if(grossSalary >= 500001 && grossSalary <= 800000){
        classWidth = grossSalary - 500000;
        classTax = 144783.35 + (classWidth * 0.325) - 2400;
      grossIncome = grossSalary - classTax;
    }else if(grossSalary > 800000){
        classWidth = grossSalary - 800000;
        classTax = 242283.35 + (classWidth * 0.35) -2400;
        grossIncome = grossSalary - classTax;
    }
    //2400 is tax relief
   return" PAYE:" + classTax + "; Net Salary: " + grossIncome
         
}
