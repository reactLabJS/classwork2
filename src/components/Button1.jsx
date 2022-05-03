import './Button.css'
export default function Button1 (props){

    const {type, onClick, children} = props; // деструктуризация
    const style = type ? `button${type}` : 'button'

    return(
        <button 
        className={style}
        onClick = {onClick}>
        {children}
        </button>
    )
}