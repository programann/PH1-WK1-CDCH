function show(value){
    console.log(value);
}


function deductions(grossSalary, benefits){
    let nssf = 0;
    let nhif = 0;

    function NHIFded(grossSalary, benefits = 0){
        let  nhifDeduction = 0
     
         if (grossSalary > 0  && grossSalary <= 5999){
           nhifDeduction  = 150
           
         }else if (grossSalary >= 6000 && grossSalary <= 7999){
           nhifDeduction =300
     
         }else if(grossSalary >= 8000 && grossSalary <= 11999){
           nhifDeduction =400
     
         }else if(grossSalary >= 12000 && grossSalary <= 14999){
           nhifDeduction =500
         }
         else if(grossSalary >= 15000 && grossSalary <= 19999){
           nhifDeduction =600
     
         }
         else if(grossSalary >= 20000 && grossSalary <= 24999){
           nhifDeduction =750
     
         }
         else if(grossSalary >= 25000 && grossSalary <= 29999){
           nhifDeduction =850
     
         }
         else if(grossSalary >= 30000 && grossSalary <= 34999){
           nhifDeduction =900
     
         }
         else if(grossSalary >= 35000 && grossSalary <= 39999){
           nhifDeduction =950
     
         }else if(grossSalary >= 40000 && grossSalary <= 44999){
           nhifDeduction =1000
     
         }
         else if(grossSalary >= 50000 && grossSalary <= 59999){
           nhifDeduction =1200
     
         }
         else if(grossSalary >= 60000 && grossSalary <= 69999){
           nhifDeduction =1300
     
         }
         else if(grossSalary >= 70000 && grossSalary <= 79999){
           nhifDeduction =1400
     
         }
         else if(grossSalary >= 80000 && grossSalary <= 89999){
           nhifDeduction =1500
     
         }
         else if(grossSalary >= 90000 && grossSalary <= 99999){
           nhifDeduction =1600
     
         }
         else if (grossSalary >= 100000){
           nhifDeduction =1700
         }
     
         // nssf = (benefits > 0 ) ? benefit : grossSalary * 0.06;
     
         if(benefits > 0){
             nssf = benefits;
         }else{
             nssf = grossSalary * 0.06;
         }
         n
         taxableIncome = grossSalary - (nssf + nhifDeduction);
             return{
                 nssf,
                 nhif,
                 taxableIncome, 
             }
    }    

    function salary(taxableIncome){

        let classTax= 0;
        let PAYE = 0;
        let classWidth = 0;
        let personalRelief = 2400;
    
        if(taxableIncome > 0 && taxableIncome <= 24000){
            classTax = taxableIncome*0.1 ;
        }else if(taxableIncome >= 24001 && taxableIncome <= 32333){
            classWidth = taxableIncome - 24000;
            classTax = 2400 + ( classWidth * 0.25);
        }else if(taxableIncome >= 32334 && taxableIncome <= 500000){
            classWidth = taxableIncome - 32333;
            classTax = 4483.25 + ( classWidth * 0.3) ;
        }else if(taxableIncome >= 500001 && taxableIncome <= 800000){
            classWidth = taxableIncome - 500000;
            classTax = 144783.35 + (classWidth * 0.325);
        }else if(taxableIncome > 800000){
            classWidth = taxableIncome - 800000;
            classTax = 242283.35 + (classWidth * 0.35);
        }
        PAYE = classTax - personalRelief;
        netSalary = taxableIncome - PAYE;
        return (PAYE, netSalary)
        let myTaxableIncome  = NHIFded(grossSalary,benefits);
        let income = salary(myTaxableIncome.taxableIncome);
    
        return {
            NSSFDeductions:  myTaxableIncome.nssf,
            NHIFDeductions:  myTaxableIncome.nhif,
            payee:  income.paye,
            grosssalary:  grossSalary,
            netsalary:  taxed.netsalary
        }
    
       
             
    }
}    


