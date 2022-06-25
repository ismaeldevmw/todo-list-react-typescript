import './TodoItem.css'

interface TodoItemProps {
  text: string
  completed: boolean
}

const TodoItem = (props: TodoItemProps) => {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>√</span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        { props.text }
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  )
}

export { TodoItem }
