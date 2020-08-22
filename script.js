function getGrade(subject){

let marks = document.getElementById(subject + "-sub");

    if(marks.value >= 80 && marks.value<=100){
        document.getElementById(subject + "-grade").innerText = "A+";
    }
    else if(marks.value >= 70 && marks.value < 80){
        document.getElementById(subject + "-grade").innerText = "A";
    }
    else if(marks.value >= 60 && marks.value < 70){
        document.getElementById(subject + "-grade").innerText = "A-";
    }
    else if(marks.value >= 50 && marks.value < 60){
        document.getElementById(subject + "-grade").innerText = "B";
    }
    else if(marks.value >= 40 && marks.value < 50){
        document.getElementById(subject + "-grade").innerText = "c";
    }
    else if(marks.value >= 33 && marks.value < 40){
        document.getElementById(subject + "-grade").innerText = "D";
    }
    else if(marks.value < 33 && marks.value>=0){
        document.getElementById(subject + "-grade").innerText = "F";
    }
    else{
        document.getElementById(subject + "-grade").innerText = "Error!";
    }

}
document.getElementById("calculate-grade").addEventListener("click", function(){
    let totalMarks = document.getElementById("total-marks");

        totalMarks.innerText = parseInt(document.getElementById("bangla-sub").value) + parseInt(document.getElementById("english-sub").value) + parseInt(document.getElementById("ict-sub").value) ; 

    let finalGrade = document.getElementById("final-grade");
    if(totalMarks.innerHTML>= 240 && totalMarks.innerHTML <=300){
        finalGrade.innerHTML = "A+";
        document.getElementById("congrates").style.display = "block";
        
    }
    else if(totalMarks.innerHTML>= 210 && totalMarks.innerHTML < 240){
        finalGrade.innerHTML = "A";
    }
    else if(totalMarks.innerHTML>= 180 && totalMarks.innerHTML < 210){
        finalGrade.innerHTML = "A-";
    }
    else if(totalMarks.innerHTML>= 150 && totalMarks.innerHTML < 180){
        finalGrade.innerHTML = "B";
    }
    else if(totalMarks.innerHTML>= 160 && totalMarks.innerHTML < 150){
        finalGrade.innerHTML = "C";
    }
    else if(totalMarks.innerHTML>= 99 && totalMarks.innerHTML < 160){
        finalGrade.innerHTML = "D";
    }
    else if(totalMarks.innerHTML>= 0 && totalMarks.innerHTML < 99){
        finalGrade.innerHTML = "F";
    }
    else if(totalMarks.value == undefined){
        totalMarks.innerHTML = "00"
    }
    else if(totalMarks.value == undefined){
        finalGrade.innerHTML = "F";
    }

})


