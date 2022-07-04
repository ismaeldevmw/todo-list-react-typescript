import React, { EventHandler } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event): void => {
    setNewTodoValue(event.target.value)
  }

  const handleCancel = (): void => {
    setOpenModal(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <textarea
        value={newTodoValue}
        onChange={handleInputChange}
        placeholder="Cortar la cebolla" 
      />
      <div className="TodoForm-buttonContainer">
        <button 
          type="button"
          onClick={handleCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button 
          type="submit"
          className="TodoForm-button TodoForm-button-add"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
