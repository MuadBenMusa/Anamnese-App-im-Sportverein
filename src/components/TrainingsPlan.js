import Button from './Button'
const TrainingsPlan = ({title}) => {
   // static examples of some training plans
    return(
        <header className = 'Contain'>
            <div className = 'trainPlans'>
                <h1>{ title}</h1> 
                <Button color ='rgb(116, 0, 0)' text ={'Add'}  /> 
            </div>
            <div className = 'train'>
               <h3>{'Warm-up'}</h3> 
               <p>{'Click to see more or Edit...'}</p>
            </div> 
            <div className = 'train'>
               <h3>{'Arms work-out'}</h3> 
               <p>{'Click to see more or Edit...'}</p> 
            </div>  
        </header>
    )
}

TrainingsPlan.defaultProps ={
    title: ' Training plans management',
}
export default TrainingsPlan ;
