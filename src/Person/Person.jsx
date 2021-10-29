import './Person.css';

function Person({person}){
    return (
        <div className="card">
            <img src={person.photo} alt={person.name + " photo"}/>
            <div>{person.name.split(' ')[0]}</div>
        </div>
    )
}

export default Person;