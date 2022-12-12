let indexId=[]
class Todo {
constructor(description){
    this.id=indexId.length+1
    this.description=description
    indexId.push(this.id)
}
getTodo(){
    return{id:this.id,description:this.description}
}
setDescription(newDescription){
    this.description=newDescription
    // return {id:this.id,description:this.description}
}
}
//  console.log(new Todo.getTodo())
//   console.log(new Todo('porcha'))
//   console.log(new Todo('chapor'))
//  console.log(new Todo(64,'Porcha').setDescription('Porchaaa'))
 function toManagement(){
    let todos=[]
    function addTodo(desc){
        let x =new Todo(desc)
        return todos.push(x)
    }

    function removeTodo(removeId){
      let doList=[]
      for(let i=0;i<todos.length;i++){
       if(todos[i].id !== removeId){
        doList.push(todos[i])
       }
      }
      return todos=doList

    }
    function findTodo(searchId){
      let found = todos.find(fsearchId =>fsearchId.id === searchId)
        return found
    }
    function getTodos(){
        return todos
    }
    return {addTodo,removeTodo,findTodo,getTodos}
 }

// console.log(addTodo("porcha"))
//  addTodo("chapor")
// addTodo("cha")
// console.log(todos)
// removeTodo('porcha')
// console.log(todos)
// console.log(indexId)
// addTodo("khanom")
// addTodo("Kinnam")
// console.log(todos)
// removeTodo(1)
// console.log(todos)
// addTodo("porcja")
// console.log(todos)
// removeTodo(3)
// console.log(todos)
// addTodo("khanom")
// console.log('------------------')
// console.log(todos)
// console.log(findTodo(1))
// removeTodo(2)
// console.log(getTodos())
 console.log(toManagement().addTodo('porcha'))
// console.log(todos)
toManagement().addTodo('Kinnom')
// console.log(todos)
toManagement().removeTodo(2)
// console.log(todos)
toManagement().addTodo('Kinnam')
// console.log(todos)
console.log(toManagement().addTodo())
// console.log(todos)
console.log(toManagement().getTodos())
console.log(todos)