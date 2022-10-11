// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘


// CREATE USER
function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
}
console.log(createUser("Mario", "Mitchell"));
// SET AGE
function setAge(user, age){
    user.age = age;
    return user
}
console.log(setAge(createUser("Mario", "Mitchell"), 31));
let mrUser = {
    firstName: "Nathalie",
    lastName: "Mitchell"
}
console.log(setAge(mrUser, 31))
// INCREMENT AGE
function incrementAge(user){
    user.age = user.age + 1;
    return user;
}
console.log(incrementAge(mrUser));
// FIX CAR
function fixCar(car){
    car.needsMaintenance = false
    return car;
}
const car = {
    make: "Tesla",
    model: "Model S",
    year: 2022,
    needsMaintenance: true
}
console.log(fixCar(car));
// ADD GRADES
    // concat()
function addGrades(student, updates){
    student.grades = student.grades.concat(updates);
    return student;
}
    // push()
function adddddGrades(student, updates){
    for (let i = 0; i < updates.length; i++){
        student.grades.push(updates[i]);
    }
    return student
}
const student = {
    name: 'Nathalie Mitchell',
    email: 'nathalie@gmail.com',
    grades: [80, 100, 95]
};
const student2 = {
    name: 'Mario Mitchell',
    email: 'mario.mitchell@codeimmersives.com',
    grades: [80, 100, 95]
};
const newGrades = [88, 70, 90];
console.log(addGrades(student, newGrades));
console.log(adddddGrades(student2, newGrades));
// GET DATA TYPE
function getDataType(obj, key){
    return typeof obj[key]
}
console.log(getDataType(car, "make"));

// ADD TODO
function addTodo(todo, newItem){
    todos.push(newItem);
    todo.push(newItem);
    return todo
}







// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
