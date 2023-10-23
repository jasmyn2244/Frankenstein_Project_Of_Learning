//new - add a todo
//list - list all todos
//delte - remove a todo
//quit - quit app

//Simply using prompts to practice array and strong methods and loops

console.log('Welcome to Todo List. You may type "new", "list", "delete", or "quit"');

let userCommand = prompt("What would you like to do");

let todos = ['eat', 'sleep', 'climb', 'bike'];

while (userCommand !== 'quit' && userCommand !== 'q') {

  if (userCommand === 'new') {
  let newTodo = prompt("Please type a new todo");
  todos.push(newTodo);
  console.log(`${newTodo} added to the list`);
  //userCommand = prompt("What would you like to do")
  } else if (userCommand === 'list') {
    console.log('----------------');
    for (let todo of todos) {
      console.log(`${todos.indexOf(todo)}: ${todo}`);
    }

    //another way to write this:
    // for (let i = 0; i < todos.length; i++) {
    //   console.log(`${i}: ${todos[i]}`)
    // }

    console.log ('----------------');
    //userCommand = prompt("What would you like to do")
  } else if (userCommand === 'delete') {
    let index = prompt("Enter index number of item you wish to delete");
    if (todos.length > 0) {
      const deleted = todos.splice(index, 1);
      console.log(`${deleted[0]} removed`);

    }
    //console.log(todos);
    //userCommand = prompt("What would you like to do");
    //break;
  }
  userCommand = prompt("What would you like to do")
}

console.log('You quit the app. Have a niced day!')
// userCommand = prompt("What would you like to do")