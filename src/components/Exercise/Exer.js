import {FaTimes} from 'react-icons/fa'

const Exer = ({exer, onDelete}) => {
   
    return (
        <div className = 'exer'>
            <h3>{exer.disc}<FaTimes style={{color: 'rgb(116, 0, 0)', cursor:'pointer'}} onClick={() => onDelete(exer.Name)} /></h3>
            <p>{exer.Name}</p>
        </div>
    )
}

export default Exer
