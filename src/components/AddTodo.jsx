import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ onAddTodo, editTodo }) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (editTodo) setTodo(editTodo.todo);
  }, [editTodo]);

  const handleAdd = () => {
    if (todo) {
      onAddTodo({ id: editTodo ? editTodo.id : uuidv4(), todo });
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="md:container md:mx-auto mx-3 my-5 md:w-1/2  rounded-xl p-5 bg-orange-200">
      <div className="addTodo mx-auto flex flex-col gap-5">
        <h2 className="text-lg font-bold">{editTodo ? 'Edit Your Todo' : 'Add a Todo'}</h2>
        <input onChange={handleChange} type="text" className="w-full rounded-lg px-5 py-1" value={todo} />
        <button onClick={handleAdd} className="bg-orange-800 hover:bg-orange-900 p-4 py-1 text-white mx-4 font-bold rounded-full">{editTodo ? 'Save' : 'Add'}</button>
      </div>
    </div>
  );
};

export default AddTodo;
