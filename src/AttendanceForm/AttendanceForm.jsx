import { useState } from "react";

import axios from "axios";

export default function AttendanceForm(props){
    const [name, setName] = useState('');
    const [going, setGoing] = useState('true');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let person = {name, going};
        axios.post('/attendance', person)
            .then(response => {
                console.log('POST SUCCESS');
            }).catch(err => {
                console.log('POST err', err);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"></input>
            <div>
                <input id="radio-y" type="radio" 
                value="Yes" name="going" defaultChecked="true"
                onChange={()=>setGoing(true)}/>
                <label htmlFor="radio-y">Yes</label>
                <input id="radio-n" type="radio" 
                value="No" name="going"
                onChange={()=>setGoing(false)}/>
                <label htmlFor="radio-n">No</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}