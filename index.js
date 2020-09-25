// //criar um programa que calcula a average
// //das grades entre os students e envia mensagem 
// //do cálculo da média
// //se a average for maior que 5 parabenizar a turma

// const student01 = "Emerson"
// const gradeAluno01 = 9.8

// const student02 = "Joao"
// const gradeAluno02 = 10

// const student03 = "luisa"
// const gradeAluno03 = 3

// const average = (gradeAluno01 + gradeAluno02 + gradeAluno03) / 3

// if (average > 5) {
//     console.log(`A média foi ${average}. Parabens`)
// } else {
//     console.log("A média é menor que 5")
// }

/* CRIANDO OBJETO*/ 

// const student01 = {
//     name: "Emerson",
//     grade: 9.8
// }

// const student02 = {
//     name: "Joao",
//     grade: 10
// }

// const student03 = {
//     name: "Luisa",
//     grade: 3
// }

// const average = (student01.grade + student02.grade + student03.grade) / 3

/* CRIANDO VETORES (array) - colecao de objetos*/

// const students = [
//     {
//         name: "Emerson",
//         grade: 9.8
//     },
//     {
//         name: "Joao",
//         grade: 10
//     },
//     {
//         name: "Luisa",
//         grade: 3
//     }
// ]

// const average = (students[0].grade + students[1].grade + students[2].grade) / 3

// if (average > 5) {
//     console.log(`A média foi ${average}. Parabens`)
// } else {
//     console.log("A média é menor que 5")
// }

// //criar um programa que calcula a average
// //das grades entre das turmas de students  
// //e envia mensagem do cálculo da média

// const classA = [
//     {
//         name: "Emerson",
//         grade: 9.8
//     },
//     {
//         name: "Joao",
//         grade: 10
//     },
//     {
//         name: "Luisa",
//         grade: 3
//     }
// ]

// const classB = [
//     {
//         name: "Thiago",
//         grade: 5
//     },
//     {
//         name: "Davi",
//         grade: 3
//     },
//     {
//         name: "Tati",
//         grade: 7
//     }
// ]

// function calculateAverage(students) {
//     return (students[0].grade + students[1].grade + students[2].grade) / 3
// }

// const average1 = calculateAverage(classA)
// const average2 = calculateAverage(classB)

// function sendMessage (average, turma) {
//     if (average > 5) {
//         console.log(`A média da turma ${turma} foi ${average}. Parabens`)
//     } else {
//         console.log(`A média da turma ${turma} é menor que 5`)
//     }
// }
// sendMessage (average1, "turmaA")
// sendMessage (average2, "turmaB")

/* CRIANDO ESTRUTURAS DE REPETIÇÃO 
    A base do programa será a mesma.*/

    const classA = [
        {
            name: "Emerson",
            grade: 9.8
        },
        {
            name: "Joao",
            grade: 10
        },
        {
            name: "Luisa",
            grade: 3
        }
    ]
    
    const classB = [
        {
            name: "Thiago",
            grade: 5
        },
        {
            name: "Davi",
            grade: 3
        },
        {
            name: "Tati",
            grade: 7
        },
        {
            name: "Francis",
            grade: 6
        }
    ]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average 
}

function sendMessage (average, turma) {
    if (average > 5) {
        console.log(`${turma} average is ${average}. Congratulations`)
    } else {
        console.log(`${turma} average is ${average}, This is not good`)
    }
}
// Marcar student como flunked se a grade
// for menor do que 5
// e, tambem, enviar uma mensagem.
function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendFlunkedMessage(student) {
    if(student.flunked) {
        console.log(`The student ${student.name} is flunked`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student);
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage (average1, "Class A")
sendMessage (average2, "Class B")

studentsReprovados(classA)
studentsReprovados(classB)