import Person from '../Person/Person.jsx';
import './AttendanceList.css';

function AttendanceList({list}) {
    const attending = list.filter(el => el.going)
    console.log(attending);
    return (
        <>
        <h3>Going: {attending.length}</h3>
        <div className="flex-container">
            {attending.map((person, i) => {
                return (
                    <Person key={i} person={person}/>
                )
            })}
        </div>
        <h4>Not Going: {list.length - attending.length}</h4>
        </>
    )
}

export default AttendanceList;