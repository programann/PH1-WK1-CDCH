function netSalary(grossSalary){

    let classTax= 0;
    let netIncome = 0; 
    let classWidth = 0;

    if(grossSalary > 0 && grossSalary <= 24000){
        classTax = grossSalary*0.1
        netIncome = grossSalary - classTax
    }else if(grossSalary >= 24001 && grossSalary <= 32333){
        classWidth = grossSalary - 24000;
        classTax = 2400 + ( classWidth * 0.25);
        netIncome = grossSalary - classTax;
    }else if(grossSalary >= 32334 && grossSalary <= 500000){
        classWidth = grossSalary - 32333;
        classTax = 4483.25 + ( classWidth * 0.3);
        netIncome = grossSalary - classTax;
    }else if(grossSalary >= 500001 && grossSalary <= 800000){
        classWidth = grossSalary - 500000;
        classTax = 144783.35 + (classWidth * 0.325);
        netIncome = grossSalary - classTax;
    }else if(grossSalary > 800000){
        classWidth = grossSalary - 800000;
        classTax = 242283.35 + (classWidth * 0.35);
        netIncome = grossSalary - classTax;
    }
    return netIncome;
}


 


