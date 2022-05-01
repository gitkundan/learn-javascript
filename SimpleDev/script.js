let todos=[]
// Add new values to array
function addTodo(){
  const inputTitle=document.getElementById('todo-title').value
  const inputDate=document.getElementById('date-picker').value
  const millisec='' + new Date().getTime()

  todos.push({
    title: inputTitle,
    dueDate: inputDate,
    id: millisec
  })
  render()
  // console.log(inputDate)
}

function deleteTodo(event){
  const newButton=event.target
  const idToDelete=newButton.id
  // todos=todos.filter(function(todo){
  //   if (todo.id===idToDelete){
  //     return false
  //   } else {
  //     return true
  //   }
  // })
  todos=todos.filter((e)=> e.id!==idToDelete)
  render()
}

// render the array in UI as list of text
function render(){
  //reset our list
  document.getElementById('todo-list').innerHTML=''

  //create a div element with children for new entries
  todos.forEach(function(todoTitle){
    let element=document.createElement('div')
    let newButton=document.createElement('button') //delete button creation
    newButton.innerText='Delete'
    newButton.style='margin-left:10px'
    newButton.onclick=deleteTodo
    newButton.id=todoTitle.id
    
    //hang the child element onto the main div : todo-list
    element.innerText=todoTitle.title + ' '+ todoTitle.dueDate
    element.appendChild(newButton)
    let todoList=document.getElementById('todo-list')
    todoList.appendChild(element)
  })
}


// Logging
// let message= typeof 'todos'
// let log=document.createElement('div')
// log.innerText=output
// document.body.appendChild(log)

// Oreilly : 20 Web Projects with Vanilla JavaScript
//The Modern JavaScript Bootcamp (2019)
// Start from Javascript Objects
// Start at 1:01:22 - button delete : TODO : delete button and see if 
// https://www.dailymotion.com/video/x5sc80f