class Todo{
    static run=1
    constructor(description){
        this.id=Todo.run++
        this.description=description
    }
    getTodo(){
        return {id:this.id,description:this.description}
    }

    setDescription(newDesc){
        this.description=newDesc
    }

}

function todoManagement(){
    let todos=[]
    function addTodo(desc){
        return todos.push(new Todo(desc))
    }
    function removeTodo(id){
       let result= todos.filter(item=>item.id!==id)
       return result
    }
function findTodo(searchId){
    let found= todos.find(item=>item.id===searchId)
    return found
}
function getTodos(){
    return todos
}
return {addTodo,removeTodo,findTodo,getTodos}
}
let {addTodo,removeTodo,findTodo,getTodos}=todoManagement()
console.log(addTodo('watch movies'))
console.log(addTodo('online shopping'))
console.log(addTodo('read books'))
console.log(getTodos())
removeTodo(2)
console.log(getTodos())
console.log(findTodo(1))