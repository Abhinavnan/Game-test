
interface Props {
    button: string;
    onClick:() => void;
    color?: string;    
}
 

const Button = ({button, onClick, color="primary"} : Props) => {
  return (
    <div >
      <button type="button" className={"btn btn-"+color}  onClick={onClick} >{button}</button>     
    </div>
  )
}

export default Button
