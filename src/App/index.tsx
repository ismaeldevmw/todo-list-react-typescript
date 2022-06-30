import { useState } from "react"
import { AppUI } from "./AppUI"

const defaultTodos = [
  { text: 'Cut hair', completed: true },
  { text: 'Study', completed: false },
  { text: 'Paint', completed: true },
]
function App() {

  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (searchValue === '') {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex(todo => todo.text === text )
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos)
  }

  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex(todo => todo.text === text )
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App
