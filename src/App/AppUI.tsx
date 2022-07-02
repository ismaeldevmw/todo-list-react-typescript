import { SetStateAction } from "react"
import { CreateTodoButton } from "../CreateTodoButton"
import { TodoContext } from "../TodoContext"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"

const AppUI = () => {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo
        }
        ) => (
          <TodoList>
            {error && <p>Desespérate, hubo un error</p>}
            { loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}

            <ul>
            {searchedTodos.map((todo, index) => (
              <TodoItem 
                key={index}
                text={todo.text}
                completed={todo.completed ?? false}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
            </ul>
          </TodoList>
        )}
      </TodoContext.Consumer>
      

      <CreateTodoButton/>
    </>
  )
}

export { AppUI }
