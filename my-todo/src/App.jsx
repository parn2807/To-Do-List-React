import { useState } from 'react'
import './App.css'
import AddButton from './components/AddButton';
import DeleteBtn from './components/DeleteBtn';
import DoneBtn from './components/DoneBtn';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;

    setTodos(prevTodos => [input, ...prevTodos ]);
    setInput("");
  };

  const enterKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  }



  return (
    <>
      <div className='to-do-list-box'>
        <h2>My To Do List</h2>
        <div className='group'><div className='text-input'>
          <input type='text' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={enterKeyDown} placeholder='Add a new task...'></input>
          <AddButton onClick={handleAdd}></AddButton>
        </div>
          <div>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo}
                  <div className='action-btn'>
                    <DoneBtn></DoneBtn>
                    <DeleteBtn></DeleteBtn></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
