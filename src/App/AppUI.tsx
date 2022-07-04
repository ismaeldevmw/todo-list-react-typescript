import React from "react"
import { CreateTodoButton } from "../CreateTodoButton"
import { TodoContext } from "../TodoContext"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"
import { TodoLoading } from "../TodoLoading"

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error</p>}
        { loading && <TodoLoading/> }
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
      
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
  )
}

export { AppUI }
