import './TodoSearch.css'

interface TodoSearchProps {
  searchValue: string
  setSearchValue: Function
}

const TodoSearch = ({ searchValue, setSearchValue}: TodoSearchProps) => {

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
    console.log(event.target.value)
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
