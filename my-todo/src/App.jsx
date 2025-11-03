import { useState } from 'react'
import './App.css'
import AddButton from './components/AddButton';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const clickAdd = () => {
    if (input.trim() === "") return;

    setTodos(prevTodos => [...prevTodos, input]);
    setInput("");
  }



  return (
    <>
      <div className='to-do-list-box'>
        <h2>My To Do List</h2>
        <div className='group'><div className='text-input'>
          <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add a new task...'></input>
          <AddButton onClick={clickAdd}>Add</AddButton>
        </div>
          <div>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
