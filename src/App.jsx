import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddButton from './components/AddButton';
import DeleteBtn from './components/DeleteBtn';
import DoneBtn from './components/DoneBtn';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add task to list
  const handleAdd = () => {
    if (input.trim() === "") return;

    setTodos(prevTodos => [input, ...prevTodos]);
    setInput("");
  };
  // Press Enter to add task
  const enterKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleDelete = (index) => {
    const deletedItem = todos[index];
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));

    toast.info(`คุณลบรายการ: "${deletedItem}"`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const handleDone = (index) => {
    const doneItem = todos[index];
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));

    toast.success(`คุณทำรายการสำเร็จ: "${doneItem}"`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };



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
                    <DoneBtn onClick={() => handleDone(index)}></DoneBtn>
                    <DeleteBtn onClick={() => handleDelete(index)}></DeleteBtn></div>
                </li>
              ))}
            </ul>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
