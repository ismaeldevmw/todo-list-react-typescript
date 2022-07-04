import ReactDOM from 'react-dom'
import './Modal.css'

const Modal: React.FC<{children: React.ReactNode}> = ({children}) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')!
  )
}

export { Modal }
