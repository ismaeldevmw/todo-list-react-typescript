import './TodoCounter.css'

interface TodoCounterProps {
  total: number
  completed: number
}

const TodoCounter = ({total, completed}: TodoCounterProps) => {
  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  )
}

export { TodoCounter }
