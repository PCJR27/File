// import { addTodoHandler } from './eventHandler/eventController.js'
import {Todo} from './lib/todo.js'
import {todoManagement}from './lib/todoManagement.js'
import {todoUserInterface} from './UI/todoList.js'
import { addTodoHandler,notDoneButtonHandler,removeButtonHandler,} from './eventHandler/eventController.js'
// const Todo = require('./lib/todo.js')
// const todoManagement = require('./lib/todoManagement.js')
// const todoUserInterface =require('./UI/todoList.js')

const {
    showTodoItem, showNumberOfDone, showNumberOfNotDone
  }=todoUserInterface()
  
  
  const {addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone}=todoManagement()
  // let one =addTodo('Porcha')
  // let two =addTodo('Mee')
  // let three = addTodo('Cha')
  // console.log(getTodos())
  // console.log(getNumberOfNotDone())
  // console.log(getTodos())
  // console.log(getNumberOfDone())
  
  // let a =getNumberOfNotDone()
  // let b =getNumberOfDone()
  // console.log(showTodoItem(one,'Porcha'))
  // console.log(showTodoItem(two,'Mee'))
  // console.log(showTodoItem(three,'Cha'))
  // console.log(showNumberOfNotDone(a))
  // console.log(showNumberOfDone(b))
  // const summaryTodo = document.getElementById('summaryTodo')
  //   const doneItems = getNumberOfDone()
  //   const doneP = document.getElementById('done')
  //   console.log(showNumberOfDone(doneItems))
  //  console.log(summaryTodo.childElementCount)
  //  console.log(doneP.textContent)
  //  console.log(doneItems)

  //  const add=document.getElementById('addBtn')
  //  console.log(add)
  //  const textInput=document.getElementsByTagName('input')
  //  let thisText=textInput[0]
  //  console.log(textInput[0])

  //  const notToDone=document.getElementsByTagName('button')
  //  console.log(notToDone)
  //  let list =document.getElementById('listTodo').children[0].children
  //  console.log(list)
  const addButton = document.getElementById('addBtn')
addButton.addEventListener('click', () => addTodoHandler())

const inputTodo = document.querySelector('input')
inputTodo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTodoHandler()
})
