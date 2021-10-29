import Person from '../Person/Person.jsx';

function AttendanceList({list}) {
    return (
        <div>
            This is the attendanceList div
            {list.map((person, i) => {
                return (
                    <Person key={i} person={person}/>
                )
            })}
        </div>
    )
}

export default AttendanceList;