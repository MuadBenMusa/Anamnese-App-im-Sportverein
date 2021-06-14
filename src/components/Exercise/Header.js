import Button from '../Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className = 'header'>
           <h1>{ title}</h1>  
           <Button color ='rgb(116, 0, 0)' text ={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> 
        </header>
    )
}

Header.defaultProps ={
    title: ' Exercises management',
}

export default Header
