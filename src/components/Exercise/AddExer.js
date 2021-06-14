import {useState} from 'react'

const AddExer = ({onAdd}) => {
    const [disc, setDisc] = useState('')
    const [Name, setName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!disc){
            alert('please add exer')
            return
        }

        onAdd({disc,Name})
        setDisc('')
        setName('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
             <label>Exercise Name</label>  
             <input type='text' placeholder='Add Name' valus={disc} onChange={(e) => setDisc(e.target.value)} />   
          </div>
          <div className='form-control'>
             <label>Exercise Discreption </label>  
             <input type='text' placeholder='Add Discreption' valus={Name} onChange={(e) => setName(e.target.value)} />   
          </div>  

          <input type='submit' value='save' className='btn btn-block '/>
        </form>
    )
}

export default AddExer
