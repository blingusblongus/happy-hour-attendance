import { useState } from "react";

import axios from "axios";

export default function AttendanceForm({fetchList}){
    const [userName, setUserName] = useState('');
    const [going, setGoing] = useState('true');

    const handleSubmit = (e) => {
        e.preventDefault();

        let person = {userName, going};
        axios.post('/attendance', person)
            .then(response => {
                console.log('POST SUCCESS');
                fetchList();
            }).catch(err => {
                console.log('POST err', err);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Github Username"></input>
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