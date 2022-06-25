import { CreateTodoButton } from "./CreateTodoButton"
import { TodoCounter } from "./TodoCounter"
import { TodoItem } from "./TodoItem"
import { TodoList } from "./TodoList"
import { TodoSearch } from "./TodoSearch"
// import './App.css'

const todos = [
  { text: 'Cut hair', completed: true },
  { text: 'Study', completed: false },
  { text: 'Paint', completed: false },
]
function App() {

  return (
    <>
      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
        <ul>
        {todos.map((todo, index) => (
          <TodoItem 
            key={index}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        </ul>
      </TodoList>

      <CreateTodoButton/>
    </>
  )
}

export default App
