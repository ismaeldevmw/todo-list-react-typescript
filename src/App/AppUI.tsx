import { CreateTodoButton } from "../CreateTodoButton"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"

type Todo = {
  text: string
  completed: boolean
}

interface AppUIProps {
  totalTodos: number
  completedTodos: number 
  searchValue: string
  setSearchValue: Function
  searchedTodos: Array<Todo>
  completeTodo: Function
  deleteTodo: Function
}

const AppUI = ({
    totalTodos,
    completedTodos, 
    searchValue, 
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
  }: AppUIProps) => {
  return (
    <>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        <ul>
        {searchedTodos.map((todo, index) => (
          <TodoItem 
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        </ul>
      </TodoList>

      <CreateTodoButton/>
    </>
  )
}

export { AppUI }
