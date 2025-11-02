import React, { useState } from 'react'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput("");
        }else{
            alert("Please enter a task");
        }
    }

    const editTask = (index) => {
        const newTask = prompt("Edit your task:", tasks[index]);
        if (newTask !== null && newTask.trim() !== "") {
            const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
            setTasks(updatedTasks);
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
  return (
    <div className='p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-x-4 mt-40'>
      <div className='flex mb-4'>
        <h1 className='font-bold text-3xl text-start ms-2'>Todo List📝</h1>
      </div>
      <div className='flex'>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}
        className='flex border-2 border-gray-300 p-2 rounded-md mx-2 w-58 text-[18px] outline-none focus:border-gray-500' 
        placeholder='Enter your tasks...' />
        <button onClick={addTask} className='p-2 bg-green-500 rounded-md shadow-lg ms-2 hover:scale-105 duration-300'>Add Task</button>
        </div>
        <div>
        <ul className='flex flex-col mt-4'>
            {tasks.map((task, index) => (
                <li key={index} className='flex justify-between items-center border-2 border-gray-300 rounded-md px-4 p-2'>
                    <span>{task}</span>
                    <div className='flex gap-0'>
                        <button onClick={() => deleteTask(index)} className='bg-red-500 px-2 py-1 rounded-md text-end text-white hover:scale-105 duration-300'>Delete</button>
                        <button onClick={() => editTask(index)} className='px-2 py-1 bg-amber-500 rounded-md shadow-lg ms-2 hover:scale-105 duration-300'>Edit</button>
                    </div>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo
