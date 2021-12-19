
import Person from '../Person/Person.jsx';

// import './AttendanceList.css';

import Box from '@mui/material/Box';

function AttendanceList({ list, fetchList }) {
    const attending = list.filter(el => el.going === 'true')
    const maybe = list.filter(el => el.going === 'maybe')
    const notGoing = list.filter(el => el.going === 'false')
    console.log(attending);


    // LIST CONTENT holds all of our Person Cards
    const sxListContent = {
        // border: '1px solid blue',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 2,
        width: '90%',
        mx: 'auto'
    }

    return (
        <Box>
            <h3>Going: {attending.length}</h3>
            <Box sx={sxListContent} >
                {attending.map((person, i) => {
                    return (
                        <Person key={i} person={person} fetchList={fetchList} />
                    )
                })}
            </Box>
            <h4>Maybe Going: {maybe.length}</h4>
            <div className="flex-container">
                {maybe.map((person, i) => {
                    return (
                        <Person key={i} person={person} fetchList={fetchList} />
                    )
                })}
            </div>
            <h4>Not Going: {notGoing.length}</h4>
        </Box>
    )
}

export default AttendanceList;