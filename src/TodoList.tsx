import { ReactNode } from "react"
import './TodoList.css'

interface TodoListProps {
  children: ReactNode
}

const TodoList = (props: TodoListProps) => {
  return (
    <section>
      <ul>
        { props.children }
      </ul>
    </section>
  )
}

export { TodoList }
