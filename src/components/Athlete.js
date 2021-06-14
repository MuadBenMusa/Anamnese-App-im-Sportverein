import Button from './Button'
const Athlete = ({title}) => {
   // static example for athlete view
    return(
        <header className = 'Contain'>
            <div className = 'trainPlans'>
                <h1>{ title}</h1> 
                <Button color ='rgb(116, 0, 0)' text ={'Add'}  /> 
            </div>
            <div className = 'train'>
               <h3>{'Max Musterman'}</h3> 
               <p>{'Click to see more or Edit...'}</p>
            </div> 
            <div className = 'train'>
               <h3>{'Hanna Müller'}</h3> 
               <p>{'Click to see more or Edit...'}</p> 
            </div>  
        </header>
    )
}

Athlete.defaultProps ={
    title: ' Athletes management',
}
export default Athlete ;
