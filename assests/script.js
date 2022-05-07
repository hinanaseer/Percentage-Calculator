// alert("hello Wprld!");
function myGrading(){
    var grscore;
    var score = document.getElementById('grade').value;
    switch(true){
        case (score <=100 && score >=90):
            grscore = 'A+ Grade'
            break;
        case (score <=89 && score >=75):
            grscore = 'A Grade'
            break;    
        case (score <=74 && score >=60):
            grscore = 'B Grade'
            break;
        case (score <=59 && score >=45):
            grscore = 'C Grade'
            break;
        case (score <=44 && score >=30):
            grscore = 'D Grade'
            break; 
        case (score <=29 && score >=0):
            grscore = 'F Grade'
            break;  
        default:  
        return 'INVALID SCORE'       
    }

    document.getElementById('grades').innerHTML = grscore
}



