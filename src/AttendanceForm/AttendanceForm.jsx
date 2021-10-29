import { useState } from "react";
import { Button } from "@mui/material";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

import axios from "axios";

export default function AttendanceForm({ fetchList }) {
    const [userName, setUserName] = useState('');
    const [going, setGoing] = useState('true');

    const handleSubmit = (e) => {
        e.preventDefault();

        let person = { userName, going };
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
                {/* <input id="radio-y" type="radio"
                    value="Yes" name="going" defaultChecked="true"
                    onChange={() => setGoing(true)} />
                <label htmlFor="radio-y">Going</label>
                <input id="radio-n" type="radio"
                    value="No" name="going"
                    onChange={() => setGoing(false)} />
                <label htmlFor="radio-n">Not Going</label> */}
                <FormControl component="fieldset">
                    <FormLabel component="legend">Are You Going?</FormLabel>
                    <RadioGroup row aria-label="going?" name="row-radio-buttons-group">
                        <FormControlLabel onChange={() => setGoing('true')} control={<Radio />} label="Going" value="true"/>
                        <FormControlLabel onChange={() => setGoing('maybe')} control={<Radio />} label="Maybe Going" value="maybe"/>
                        <FormControlLabel onChange={() => setGoing('false')} control={<Radio />} label="Not Going" value="false"/>
                    </RadioGroup>
                </FormControl>
            </div>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    )
}