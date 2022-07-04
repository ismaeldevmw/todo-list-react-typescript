import './CreateTodoButton.css'

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateTodoButton: React.FC<Props> = ({ setOpenModal }) => {
  const onClickButton = () => {
    setOpenModal(prevState => !prevState)
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  )
}

export { CreateTodoButton }