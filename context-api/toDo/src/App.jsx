import {TodoContextProvider} from './contexts/TodoContextProvider'
import './App.css'
import TodoInput from './components/TodoInput'
import Task from './components/Task'
import { useTodo } from './contexts/TodoContext'
import { useState } from 'react'



function App() {

  const {todos} = useTodo();
  const addTodo = (name) => {
    
  }

  return (
    <>
    <TodoContextProvider value={{todos, addTodo}}>
      <TodoInput />
      <div>
        {todos.length > 0 ? (
          todos.map((task) => <Task key={task.id} name={task.name} />)
        ) : (
          <p className="text-white">No Todos</p>
        )}
      </div>
    </TodoContextProvider>
      
    </>
  )
}

export default App
