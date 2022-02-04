var fs = require('fs')

fs.readFile('./data/students.json', 'utf8', function(err, dataFromSomeFile){
    if (err){
        console.log(err); // or reject the promise (if used in a promise)
        return; // exit the function
    }
    
    let data = JSON.parse(dataFromSomeFile); // convert the JSON from the file into an array of objects
    console.log(data);
});
fs.readFile('./data/course.json', 'utf8', function(err, dataFromSomeFile){
    if (err){
        console.log(err); // or reject the promise (if used in a promise)
        return; // exit the function
    }
    
    let data = JSON.parse(dataFromSomeFile); // convert the JSON from the file into an array of objects
    console.log(data);
});

class data{
    constructor(students,courses)
    {
    this.students = students
    this.course = courses
    

var datacollection = new students()
console.log(typeof(datacollection))
console.log(datacollection)
s1.display()
console.log(datacollection.studentnum)//Private will be undefined
console.log(datacollection.firstname)

    }
