import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

const TodoSearch = () => {

  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
    // console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <>
    <input 
    className="TodoSearch" 
    placeholder="Cebolla"
    value={searchValue}
    onChange={onSearchValueChange}/>
    </>
  )
}

export { TodoSearch }
