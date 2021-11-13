import { Button } from '@mui/material';
import axios from 'axios';
import './Person.css';

function Person({person, fetchList}){

    const handleClick = () => {
        axios.delete(`/attendance/${person.id}`)
            .then(response => {
                console.log('Delete success');
                fetchList();
            }).catch(err => {
                console.log('Delete err');
                console.log(err);
            });
    }



    return (
        <div className="card">
            <img src={person.photo} alt={person.name + " photo"}/>
            <div>{person.name?.split(' ')[0]}</div>
            <Button onClick={handleClick}>Remove</Button>
        </div>
    )
}

export default Person;