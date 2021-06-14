import { useState } from 'react'
import Header from './Exercise/Header'
import Exers from './Exercise/Exers'
import AddExer from './Exercise/AddExer'

const Exercise = () => {
  const[showAddExer, setShowAddExer] = useState(false)


// array with examples for exercises.
  const [exers,setExers] = useState( [
    {
        Name : 'A push-up is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms',
        disc: 'Push up'
    },
    {
        Name : 'The bench press builds the muscles of the chest as well as the triceps of the back of the arms and the front deltoid shoulder muscles.',
        disc: 'Bench press'
    }
])

// add exercise func.
const addExer = (exer) =>{
  const newExer = {...exer}
  setExers([...exers,newExer])
  setShowAddExer(!showAddExer)
}


// delete exercise func.
const deleteExer = (Name) => {
 setExers(exers.filter((exer) => exer.Name !== Name ))
}

  return (
    <div className="Container">

      <Header onAdd={() => setShowAddExer(!showAddExer)} showAdd={showAddExer} />
      {showAddExer ? <AddExer onAdd={addExer} /> : <Exers exers={exers} onDelete = {deleteExer} />}

    </div>
  )
}

export default Exercise ;
