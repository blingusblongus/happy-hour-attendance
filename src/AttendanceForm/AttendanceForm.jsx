
import { useState } from "react";
import { Button } from "@mui/material";
import {
    FormControl, FormLabel,
    RadioGroup, FormControlLabel, Radio,
    TextField, Paper
} from "@mui/material";

// import './AttendanceForm.css';

import axios from "axios";

export default function AttendanceForm({ fetchList }) {
    const [userName, setUserName] = useState('');
    const [going, setGoing] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!going || !userName) return;

        let person = { userName, going };
        axios.post('/attendance', person)
            .then(response => {
                console.log('POST SUCCESS');
                fetchList();
                setUserName('');
                setGoing('');
            }).catch(err => {
                console.log('POST err', err);
            })

    }

    // INPUT CONTAINER holds the TextField, Radio Buttons, and Submit button
    const sxInputContainer = {
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '45%',
        minWidth: 410,
        px: 3,
        py: 3,
        my: -10,
        mb: 4,
        mx: 'auto',
        gap: 2,
        zIndex: 500,
    }

    // INPUT controls the actual size of the TextField
    const sxInput = {
        // border: '1px solid green',
        width: '75%',
        mx: 'auto',
    }

    // the "ARE YOU GOING" label properties
    const sxFormLabel = {
        my: -2,
        color: 'black',
    }

    // RADIO button options; spacing adjustments
    const sxRadioContainer = {
        // border: '1px solid blue',
        gap: 2,
    }

    // SUBMIT BUTTON adjustments
    const sxSubmitButton = {
        width: '75%',
        mx: 'auto',
    }

    return (
        <form onSubmit={handleSubmit}>

            <Paper sx={sxInputContainer} elevation={5}>
                <TextField sx={sxInput}
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    label="Github Username">
                </TextField>

                <Paper elevation={2}>
                    <FormControl component="fieldset">
                        <FormLabel sx={sxFormLabel} component="legend"><h3>Are You Going?</h3></FormLabel>
                        <RadioGroup sx={sxRadioContainer} row aria-label="going?" name="row-radio-buttons-group">
                            <FormControlLabel onChange={() => setGoing('true')} control={<Radio />} label="Going" value="true" />
                            <FormControlLabel onChange={() => setGoing('maybe')} control={<Radio />} label="Maybe Going" value="maybe" />
                            <FormControlLabel onChange={() => setGoing('false')} control={<Radio />} label="Not Going" value="false" />
                        </RadioGroup>
                    </FormControl>
                </Paper>

                <Button sx={sxSubmitButton} size="large" type="submit" variant="contained">Submit</Button>
            </Paper>

        </form>
    )
}