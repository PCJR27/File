//หาElement
let newSub =document.getElementById('courseList')
let ch=newSub.children
let one=ch[0]
//หาElement2
// let bodyChildren=document.body.children //คืนแต่element node type
// let bodyChild =document.body.childNodes //คืนทุกnode type ระวังtext node white space
// let divChild= bodyChildren[1]
// let two =divChild.children
// // let ulNode=two[0] //divChild[0]
// let ulNode =divChild.firstElementChild
// console.log(bodyChildren)
// console.log(bodyChild)


//create element
let newLi= document.createElement('li') //tag <li></li>
newLi.setAttribute('class','dev') //<li class='dev'></li>
newLi.textContent='INT101- Java Programming I' //<li class='dev'>INT101- Java Programming I</li>
one.appendChild(newLi)

let newLiTwo = document.createElement('li')
newLiTwo.setAttribute('class','dev')
newLiTwo.innerText='INT202-Server Side I'
one.appendChild(newLiTwo)


//HTMLCollection
//1. query by attribute id
let divById = document.getElementById('summary')
console.log(divById)

let ulById=document.getElementById('courseList')
console.log(ulById)

//2. query by tagname
//ใช้เมื่อไม่รู้attribute หาเฉพาะขึ้น nodeชื่อtagนั้นๆ
let ulByTagName=document.getElementsByTagName('ul')
console.log(ulByTagName)
console.log(ulByTagName.length)
console.log(ulByTagName[0])
console.log(ulByTagName[1])

//3.query by classname return HTMLcollectionหมด
let nodeByClassName=document.getElementsByClassName('database')
console.log(nodeByClassName)

Array.from(nodeByClassName).forEach(element => {
    console.log(element)
});


//NodeList

//1.query by name ใช้กับ name attribute 
const nodeByName=document.getElementsByName('abc')

//2.query by querySelector (return first descendant)

const queryByClass=document.querySelector('.database')
console.log(queryByClass)
const queryById=document.querySelector("#summary")
console.log(queryById)
//3.query by querySelectorAll (return all result nodes)
const queryAllByClass=document.querySelectorAll(".database")
console.log(queryAllByClass)


//ต้องการหาli ที่มีclassชื่อว่าdevop 
const queryAllBytagClass=document.querySelectorAll('li[class=devops]')
console.log(queryAllBytagClass)

const queryAllBytagClass2=document.querySelectorAll('li.devops')
console.log(queryAllBytagClass2)

const queryText =document.getElementsByTagName('li')
console.log(queryText)

    //insertBefore
//1.create p element
let pNewNode = document.createElement('p')
pNewNode.setAttribute('class','devops')
pNewNode.textContent='2'

//2. select parent
let divParentNode =document.getElementById('summary')

//3.select referent node
let divCh=divParentNode.children
let reference =divCh[1]
console.log(reference)

// 4. แทรกเข้าไปที่ refernce node insert before 3. 
divParentNode.insertBefore(pNewNode,reference)

    //replace
// 1.create newnode
let newLiNode=document.createElement('li')
newLiNode.textContent='Ajarn Saichon Jaiyen'

// 2.find parent
let findParent =document.querySelector('.lecturers')

//3.oldNode
let lioldNode=findParent.children[1]
console.log(lioldNode)

//4.replace
findParent.replaceChild(newLiNode,lioldNode)

    //remove
// 1.find parent
// let findParent =document.querySelector('.lecturers')

//2. SELECT A DELETE NODE   
const deleteNode=findParent.lastElementChild //ใช้ได้แค่ตัวfirstกับlastแต่ถ้าตัวกลางๆต้องอ้าง index[]
//3.remove
findParent.removeChild(deleteNode)

//system dialogs

//1. who are you?, user enters her/his name (prompt) //return ค่า
//2. Confirm your name (confirm) return boolean
//3. greeting message (alert)

//1.
const yourName=prompt('Who are you?','please type your name')
if(yourName===null)
alert('Hello, guest')

else {const isConfirmName =confirm(`Are you ${yourName}?`)

      isConfirmName?alert(`hello,${yourName}`):alert('you are guest!')
}



