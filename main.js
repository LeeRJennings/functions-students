// In this exercise, you will define four functions. One will create a student object, and the other three will add a grade for a subject to the student object.

// 1. createStudent() should return a new student object. The name of the student, and which grade the student is in, must be passed to the function as arguments. 
// The returned object should have a name property and a grade property.

const createStudent = (studentName, studentGrade) => {
    const student = {
        name: studentName,
        grade: studentGrade
    }
    return student
}

const newStudent = createStudent("Billy", "11")
// // console.log(newStudent)


// 2. addMathGrade() should add a new "math" property to the student with a value of "B".

// const addMathGrade = (studentObj, grade) => {
//     studentObj.math = grade

//     return studentObj
// } 

// addMathGrade(newStudent, "B")
// // console.log(newStudent)


// // 3. addHistoryGrade() should add a new "history" property to the student with a value of "C".

// const addHistoryGrade = (studentObj, grade) => {
//     studentObj.history = grade

//     return studentObj
// } 

// addHistoryGrade(newStudent, "C")
// // console.log(newStudent)


// // 4. addScienceGrade() should add a new "science" property to the student with a value of "A".

// const addScienceGrade = (studentObj, grade) => {
//     studentObj.science = grade

//     return studentObj
// } 

// addScienceGrade(newStudent, "A")
// console.log(newStudent)

const addGrades = (studentObj, mathGrade, historyGrade, scienceGrade) => {
    studentObj.math = mathGrade
    studentObj.history = historyGrade
    studentObj.science = scienceGrade

    return studentObj
}

addGrades(newStudent, "B", "C", "A")
console.log(newStudent)

// Remember to follow the flow that you learned about in the last chapter.

// 1. Each function should define a parameter to hold the object.
// 2. Each function should be invoked with an object provided as an argument.
// 3. Each function should return the object after the property is added.
// 4. The return value of the function should be stored in a variable.