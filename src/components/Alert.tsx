// used rafc abbriviation
interface Props { 
    children ?: React.ReactNode //pass html element
    close: () => void
}
const Alert = ({children, close}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert" >
      {children}
      <button type="button" className="btn-close" onClick={close} data-bs-dismiss="alert" aria-label="Close"></button>
      
    </div>
  ) // Allert with close button
}

export default Alert
