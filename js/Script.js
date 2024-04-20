function Person(n, a, g, i, b, s, gr) {
  this.name = n;
  this.age = a;
  this.gender = g;
  this.interests = i;
  this.bio = b;
  this.subject = s;
  this.greeting = gr;
}
var teacher= []
        teacher.push(new Person( "name"," age", "gender", "interests", "bio","subject","greeting"))
var text = "";
for(i in teacher){
    text+= teacher[i].name+":"+"<br>"+ 
    teacher[i].age+":" +"<br>"+
    teacher[i].gender+":"+"<br>"+ 
    teacher[i].interests+":"+"<br>"+ 
    teacher[i].bio+":" +"<br>"+ 
    teacher[i].subject+":"+"<br>"+ 
    teacher[i].greeting +":"
}
document.getElementById("teacher").innerHTML = text 


var teacher1 = {
    "name": "Dave Griffiths",
    "age": 31,
    "gender": "male",
    "interests": "football",
    "bio": "They like football and cookery.",
    "subject": "Math",
    "greeting": "Hello. My name is Mr. Griffiths, and I teach Math.",
};
var teacherInfoContainer1 = document.getElementById("teacher-info-container1");
var teacherInfoHTML1 = "";
Object.keys(teacher1).forEach(i => {
    teacherInfoHTML1 += '<div class="teacher-info1">' + i + ": " + teacher1[i] + "<br>";
});
teacherInfoContainer1.innerHTML = teacherInfoHTML1;
/* 
var teacher2 = {
    "name": "Melanie Hall",
    "age": 26,
    "gender": "female",
    "interests": "play archery",
    "bio": "Melanie Hall is 26 years old.",
    "subject": "physics",
    "greeting": "Hello. My name is Ms. Hall, and I teach physics.",
};
var teacherInfoContainer2 = document.getElementById("teacher-info-container2");
var teacherInfoHTML2 = "";
Object.keys(teacher2).forEach(i => {
    teacherInfoHTML2 += '<div class="teacher-info2">' + i + ": " + teacher2[i] + "<br>";
});
teacherInfoContainer2.innerHTML = teacherInfoHTML2;
 */
const teacher2 = {
    name: "Melanie Hall",
    age: 26,
    gender: "female",
    interests: "play archery",
    bio: "Melanie Hall is 26 years old.",
    subject: "physics",
    greeting: "Hello. My name is Ms. Hall, and I teach physics.",
};

const teacherInfoContainer2 = document.getElementById("teacher-info-container2");
let teacherInfoHTML2 = "";

Object.keys(teacher2).forEach(key => {
    teacherInfoHTML2 += `<div class="teacher-info2">${key}: ${teacher2[key]}<br></div>`;
});

teacherInfoContainer2.innerHTML = teacherInfoHTML2;



