import { useState } from "react";
import { Button } from "@mui/material";
import { FormControl, FormLabel, 
    RadioGroup, FormControlLabel, Radio, 
    TextField, Paper} from "@mui/material";
import './AttendanceForm.css';

import axios from "axios";

export default function AttendanceForm({ fetchList }) {
    const [userName, setUserName] = useState('');
    const [going, setGoing] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!going) return;

        let person = { userName, going };
        axios.post('/attendance', person)
            .then(response => {
                console.log('POST SUCCESS');
                fetchList();
                setUserName('');
            }).catch(err => {
                console.log('POST err', err);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                label="Github Username"></TextField>
            <div id="radio-container">
                {/* <input id="radio-y" type="radio"
                    value="Yes" name="going" defaultChecked="true"
                    onChange={() => setGoing(true)} />
                <label htmlFor="radio-y">Going</label>
                <input id="radio-n" type="radio"
                    value="No" name="going"
                    onChange={() => setGoing(false)} />
                <label htmlFor="radio-n">Not Going</label> */}
                <Paper elevation={2}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Are You Going?</FormLabel>
                    <RadioGroup row aria-label="going?" name="row-radio-buttons-group">
                        <FormControlLabel onChange={() => setGoing('true')} control={<Radio />} label="Going" value="true"/>
                        <FormControlLabel onChange={() => setGoing('maybe')} control={<Radio />} label="Maybe Going" value="maybe"/>
                        <FormControlLabel onChange={() => setGoing('false')} control={<Radio />} label="Not Going" value="false"/>
                    </RadioGroup>
                </FormControl>
                </Paper>
            </div>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    )
}