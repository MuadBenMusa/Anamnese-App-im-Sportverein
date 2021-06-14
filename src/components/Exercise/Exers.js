import Exer from './Exer'


const Exers = ({exers, onDelete}) => {

    return (
        <>
         {exers.map((exer) => (
            <Exer key={exer.Name} exer={exer} onDelete={onDelete} />
         ))}   
        </>
    )
}

export default Exers
