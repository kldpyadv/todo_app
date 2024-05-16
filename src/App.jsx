import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const [editTodo, setEditTodo] = useState(null);

  const handleAddTodo = (newTodo) => {
    if (editTodo) {
      const updatedTodos = todos.map(todo => (todo.id === editTodo.id ? { ...todo, todo: newTodo.todo } : todo));
      setTodos(updatedTodos);
    } else {
      setTodos(prevTodos => [...prevTodos, newTodo]);
    }
    setEditTodo(null);
  };

  const handleDeleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  };

  const handleStartEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <>
      <Navbar />
      <AddTodo onAddTodo={handleAddTodo} editTodo={editTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleCompleted={handleToggleCompleted} onStartEdit={handleStartEdit} />
    </>
  );
}

export default App;
