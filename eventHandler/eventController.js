//สิ่งที่มีปฏิสัมพันธ์กับUser
import { todoManagement } from '../lib/todoManagement.js'
import { todoUserInterface } from '../UI/todoList.js'
const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoUserInterface()

const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement()

// const todoManagement = require('../lib/todoManagement.js')
// const todoList = require('../UI/todoList.js')

// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoList()
// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

// function addText(){
//   const textInput=document.getElementsByTagName('input')
//   let thisText=textInput[0]
//   if(thisText=''){
//     return false
//   }
//   else addTodo

// }
const addTodoHandler = () => {
  // const addButton=document.getElementById('addBtn')
  const text=document.querySelector('input').value
  // text.addEventListener('click',()=> {
    if (text.trim().length!==0){
      const todoId=addTodo(text)
      showTodoItem(todoId,text)
      addButtonHandler(todoId)
      showNumberOfDone(getNumberOfDone())
      showNumberOfNotDone(getNumberOfNotDone())

    }
  // })
}
const addButtonHandler=(todoId)=>{
  document.getElementById(todoId).children[1].addEventListener('click',notDoneButtonHandler)
  document.getElementById(todoId).children[2].addEventListener('click',removeButtonHandler)
  document.querySelector('input').value=''
}

const notDoneButtonHandler = (event) => {
  // const notToDone=document.getElementsByTagName('button')
  const doneButtonFire = event.target
  setdoneStyle(doneButtonFire)
  setItemToDone(doneButtonFire.parentElement.getAttribute('id'))
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())


}
const setdoneStyle=(doneButtonFire)=>{
doneButtonFire.textContent='Done'
doneButtonFire.style='background-color: green;color: white'

}

const removeButtonHandler = (event) => {
  const now=event.target
  const removeId=now.parentElement.getAttribute('id')
  removeTodoItem(removeId)
  removeTodo(Number(removeId))
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
}

// module.exports = {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler
// }

