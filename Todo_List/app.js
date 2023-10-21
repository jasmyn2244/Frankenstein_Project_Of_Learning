//new - add a todo
//list - list all todos
//delte - remove a todo
//quit - quit app

//Simply using prompts to practice array and strong methods and loops

console.log('Welcome to Todo List. You may type "new", "list", "delete", or "quit"')

let userCommand = prompt("What would you like to do")

let todos = []

while (userCommand === 'new') {
  let newTodo = prompt("Please type a new todo")
  todos.push(newTodo)
  userCommand = prompt("What would you like to do")
} 

// while (userCommand === 'list') {
//   for (let todo of todos) {
//     console.log(`${indexOf(todo)}: ${todo}`)
//   }
//   userCommand = prompt("What would you like to do")
// }