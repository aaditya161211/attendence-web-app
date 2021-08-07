nameofthestudent=[];
function submit(){
var name1=document.getElementById("student_1").value;
var name2=document.getElementById("student_2").value;
var name3=document.getElementById("student_3").value;
var name4=document.getElementById("student_4").value;

nameofthestudent.push(name1);
nameofthestudent.push(name2);
nameofthestudent.push(name3);
nameofthestudent.push(name4);
console.log(nameofthestudent);

document.getElementById("display_name").innerHTML=nameofthestudent;
document.getElementById("Submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
nameofthestudent.sort();
console.log(nameofthestudent);
document.getElementById("display_name").innerHTML=nameofthestudent;
}