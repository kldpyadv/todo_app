import React, { useState  } from 'react';
import { FaRegTrashAlt, FaPen } from "react-icons/fa";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted, onStartEdit }) => {
  const [showFinished, setshowFinished] = useState(true)
  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  return (
    <div className="md:container flex flex-col md:w-1/2 md:mx-auto mx-3 my-5 rounded-xl p-5 bg-orange-200">
      <div className="showfinidhed">
        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
        <label className='mx-2' htmlFor="show">Show Finished</label> 
      </div>
      <div className="h-[1px] bg-black opacity-20 mx-auto w-[90%] my-2"></div>
      <div className="addTodo text-left">
        <h2 className="text-lg font-bold">Your Todos</h2>
      </div>
      <div className="todos">
        {todos.length ===0 && <div className='m-5'>No Todos to display</div> }
        {todos.map(item => (
          (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between">
            <div className="items flex gap-3">
                <input name={item.id} onChange={() => onToggleCompleted(item.id)} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}> {item.todo}</div>
            </div>
            <div className="actions flex h-full">
              <button onClick={() => onStartEdit(item)} className=" mx-2 text-[#9a3412] font-bold rounded-md"><FaPen /></button>
              <button onClick={() => onDeleteTodo(item.id)} className="text-[#9a3412] mx-2 font-bold rounded-md"><FaRegTrashAlt /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
