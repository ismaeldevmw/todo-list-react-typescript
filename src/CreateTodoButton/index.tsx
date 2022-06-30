import './CreateTodoButton.css'

const CreateTodoButton = () => {
  const onClickButton = (msg: string) => {
    alert(msg)
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton('Abre un modal')}
    >
      +
    </button>
  )
}

export { CreateTodoButton }