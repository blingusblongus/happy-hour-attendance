
import axios from 'axios';
// import './Person.css';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function Person({ person, fetchList }) {

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

    // CARD CONTAINER holds our Image, Name, and Remove button
    const sxCardContainer = {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }

    // IMAGE properties
    const sxImageControl = {
        height: 140,
        width: 140,
        borderRadius: '50%',
        boxShadow: 2,
    }

    // NAME & BUTTON CONTAINER
    const sxNameAndButtonContainer = {
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        my: -1,
    }

    // X ICON / Remove Button properties
    const sxRemoveButton = {
        cursor: 'pointer',
        height: 30,
        width: 30,
        mr: 1,

    }

    return (
        <Box sx={sxCardContainer}>
            <CardMedia sx={sxImageControl}
                component="img"
                image={person.photo}
                alt={person.name + " photo"}
            />
            <Box sx={sxNameAndButtonContainer}>
                <HighlightOffIcon sx={sxRemoveButton}
                    color="error"
                    onClick={handleClick} >
                </HighlightOffIcon>
                <h4>{person.name?.split(' ')[0]}</h4>
            </Box>
        </Box>
    )
}

export default Person;