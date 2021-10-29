import { useState } from "react";

export default function AttendanceForm(props){
    const [name, setName] = useState('');
    const [going, setGoing] = useState('true');

    return (
        <form>
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
        </form>
    )
}