//let holds the perfomance
//For marks :>79 return performance to be "A";
            // :>=60 && <=79  performance to be "B";
            // :>=49 && <= 59 performance to be "C";
            // ;>=40 && < 49 Performance to be "D";
            // :<40 && >=0 performance to be "E"
const grade = prompt("Pass your mark:");
Grade(grade)


function Grade(Marks){

    let performance = "Y";

    if(Marks>= 0 && Marks < 40){ //range =0 to 39
        performance= "E";
    }else if(Marks >= 40 && Marks < 49){ // range =40 to 48
        performance = "D";
    }else if(Marks >= 49 && Marks <= 59){ // range = 49 to 59
        performance = "C";
    }else if(Marks >= 60 && Marks <= 79){ // range = 60 to 79
        performance = "B";
    }else if(Marks > 79 && Marks<= 100){ // range 80 to 100
        performance = "A";
    }else{
        performance = "Invalid mark"
    }
    return performance
    document.getElementById("output").innerHTML = performance 
}
