function netSalary(grossSalary){

    let clusterTax = 0;
    let grossTax = 0;
    let rated = 0; 

    if(grossSalary > 0 && grossSalary <= 24000){
        grossTax = (grossSalary*0.10);
        netIncome = grossSalary - grossTax;
    }else if (grossSalary >= 24001 && grossSalary <= 32333){
        rated = (grossSalary - 24000) * 0.25;
        grossTax = 2400 + rated
        clusterTax = grossSalary-grossTax;
    }else if (grossSalary >= 32334 && grossSalary <= 500000){
        rated = (grossSalary - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
        clusterTax = grossSalary-grossTax;
    }else if (grossSalary >= 500001 && grossSalary <= 800000){
        rated = (grossSalary - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated
        clusterTax = grossSalary-grossTax;  
    }else if(grossSalary > 800000){
        rated = (grossSalary- 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
        clusterTax = grossSalary-grossTax;
    }
    return clusterTax;
}
console.log(tax(45000))

 


