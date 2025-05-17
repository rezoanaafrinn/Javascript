// how to create an object
// how to print the value of an object
var student1 = {
    name : "Rezoana",
    age : 12,
    cgpa : 3.00,
    lang : ["bangali","english","math"]

}
console.log(student1.name);
// adding a contructor
// adding function inside a constructor

function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Rezoana",27,3.60,["bangali","english","math"]);
var student2 = new Student("Anis",28,3.00,["bangali","english","math"]);
var student3 = new Student("Lubaba",30,3.70,["bangali","english","math"]);

student1.display();
student2.display();
student3.display();
