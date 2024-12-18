import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
import TodoDate from './components/TodoDate';

function App() {

  const[showAddTodoForm, setShowAddTodoForm] = useState(false);

  //todos will be inside the useState & setTodos used to update the variable
  const[todos, setTodos] = useState([
    {isComplete: false,rowNumber: 1,rowDescription: 'N/A',rowAssigned:'User one'},
    {isComplete: false,rowNumber: 2,rowDescription: 'N/A',rowAssigned:'User two'},
    {isComplete: false,rowNumber: 3,rowDescription: 'N/A',rowAssigned:'User one'},
  
  ]);

//Dynamic onclick listener to btn 'Add new todo'
//rerender applications 
const addTodo = (description, assigned) => {
  let rowNumber = 0; 
  if (todos.length > 0){
    rowNumber = todos[todos.length -1].rowNumber + 1;
  }else{
    rowNumber = 1;
  }
    const newTodo = {
    isComplete: false,
    rowNumber: rowNumber, 
    rowDescription: description,
    rowAssigned: assigned
    };
  
    setTodos(todos => [...todos, newTodo]) //setting todos by first construct todos that already in exists + add new todos 
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  const editTodo = (rowNumber,rowDescription, rowAssigned) => {
    const updatedTodos = todos.map(todo => {
      if (todo.rowNumber === rowNumber){
        return {
          ...todo,
          rowDescription: rowDescription,
          rowAssigned: rowAssigned
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const isCompleteTodo = (rowNumber) => {
    const updatedTodos = todos.map(todo =>{
      if (todo.rowNumber == rowNumber){
        return{
          ...todo,
          isComplete: ! todo.isComplete // Toggle between true/false
        };
    }
    return todo;
  });
setTodos(updatedTodos)
  }
  
// Main
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header  text-center  fs-4  fw-bold'  >
          Your Todo's List!
          <TodoDate />
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}  deleteTodo={deleteTodo} editTodo={editTodo} isCompleteTodo={isCompleteTodo} />
          <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)} > 
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
            </button>

          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo}/>
          }

        </div>
      </div>
    </div>
  );
}


export default App;
