//จัดการ collection todo
import { Todo } from './todo.js'
// const Todo = require('./todo.js')
 function todoManagement() {
  let todos = []
  function addTodo(desc) {
    // return todos.push(new Todo(desc))
    const newTodo = new Todo(desc)
    todos.push(newTodo)
    return newTodo.id
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    return todos.filter((todo) => todo.done === true).length
  }
  function getNumberOfNotDone() {
    return todos.filter((todo) => todo.done === false).length
  }
  function setItemToDone(doneId) {
   let result= todos.find(item => item.id===Number(doneId))
  //  console.log(result)
   result.setDone(true)
  }
  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    setItemToDone
  }
}

const {
  addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    setItemToDone
}=todoManagement()
// addTodo('porcha')
// console.log(getTodos())
// setItemToDone(1)
// console.log(getTodos())
export { todoManagement }
// module.exports = todoManagement
