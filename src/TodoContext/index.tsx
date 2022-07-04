import React, { PropsWithChildren } from 'react'
import { useLocalStorage } from './useLocalStorage'

interface IContextProps {
  loading: boolean
  error: boolean | string
  totalTodos: number
  completedTodos: number 
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  searchedTodos: Array<Todo>
  addTodo: Function
  completeTodo: Function
  deleteTodo: Function
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const TodoContext = React.createContext<IContextProps>({
  loading: false,
  error: false,
  totalTodos: 0,
  completedTodos:0,
  searchValue:'',
  setSearchValue: () => {},
  searchedTodos: [],
  addTodo: () => {},
  completeTodo: () => {},
  deleteTodo: () => {},
  openModal: false,
  setOpenModal: () => {}
})

type Todo = {
  text: string
  completed?: boolean
}

interface Props {
  children: React.ReactNode
}

const TodoProvider: React.FC<Props> = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter((todo: Todo) => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (searchValue === '') {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo: Todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const addTodo = (text: string) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }
  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.text === text )
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }

  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.text === text )
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
