import { MouseEventHandler } from 'react'
import './TodoItem.css'

interface TodoItemProps {
  text: string
  completed: boolean
  onComplete: MouseEventHandler
  onDelete: MouseEventHandler
}

const TodoItem = ({text, completed, onComplete, onDelete}: TodoItemProps) => {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  )
}

export { TodoItem }

