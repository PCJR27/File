import { students } from "./data/students.js"
import { lecturers } from "./data/lecturers.js"

//ปฏิบัติ
console.log(students)
console.log(lecturers)

const divButtonPanel = document.getElementById('buttonPanel')


const studentButton = divButtonPanel.children[0]
const lecturerButton = divButtonPanel.children[1]
divButtonPanel.addEventListener('click', (event) => {
    console.log(event.target)
    console.log(event.target.id)
    console.log(event.type)
    console.log(event.eventPhase)
    console.log(event.currentTarget)
})

// function studentButtonHandler(){
// const ulParent=document.querySelector('ul')
// ulParent.textContent='' //เคลียข้อมูลออกหมด
// //วนลูปเพื่อสร้างliตามจำนวนเท่ากับlenght ของarray student
// for(let i=0;i<students.length;i++){
//     const liElement =document.createElement('li')
//     liElement.textContent=`ID:${students[i].id},Name:${students[i].name}`
//     ulParent.appendChild(liElement)
// }

// }


// function lecturerButtonHandler(){
//     const parentLecture=document.querySelector('ul')
//     parentLecture.textContent=''
//     for(let i=0;i<lecturers.length;i++){
//         const lecturerElement=document.createElement('li')
//         lecturerElement.textContent=`ID:${lecturers[i].id},Name:${lecturers[i].name}`
//         parentLecture.appendChild(lecturerElement)
//     }
// }
studentButton.addEventListener('click', studentButtonHandler)
lecturerButton.addEventListener('click', lecturerButtonHandler)
function lecturerButtonHandler(event) {
    dataButtonHandler(lecturers)
}
function studentButtonHandler(e) {

    dataButtonHandler(students)
}

// function dataButtonHandler(items) {
//     const parent = document.querySelector('ul')
//     parent.textContent = ''
//     for (let i = 0; i < lecturers.length; i++) {
//         const elementLi = document.createElement('li')
//         elementLi.textContent = `ID:${items[i].id},Name:${items[i].name}`
//         parent.appendChild(elementLi)
//     }
// }



function dataButtonHandler(items) {
    const ulParentElement = document.querySelector('ul')
    ulParentElement.textContent = ''
    items.forEach(item => { //each element in array       
         for (const key in item) { //each property of object            
    const liElement=document.createElement('li')
        liElement.textContent = `${key} ${item[key]}`             
        ulParentElement.appendChild(liElement)
    }
})

 }


//Input 
const message = document.querySelector('#message')
const display = document.querySelector('p')
// message.addEventListener('input', function () {
// display.textContent =message.value
// })

//อยากให้กดenterแล้วค่อยshow
message.addEventListener('keypress', (event) => {
    if (event.key === 'Enter')
        display.textContent = message.value

})




















//ทฤษฎี
//Event
// add event handler function by using anonymous function
// studentButton.addEventListener('click',()=>{
//     alert('Hello, student button')
// })
//ทำงานปุ่มเดียวกัน event type เดียวกัน ทำได้ไม่error ทำตามลำดับ

// function studentButtonHandler(){
//     alert('2nd function hnadler for student button')
// }
// studentButton.addEventListener('click',studentButtonHandler)
// studentButton.removeEventListener('click',studentButtonHandler)

//function expression (arrow function)
// const divHandler = ()=>{
//     alert('Hello, Div Button Panel')
// }

//add Event handler function by using function name
// divButtonPanel.addEventListener('click',divHandler)