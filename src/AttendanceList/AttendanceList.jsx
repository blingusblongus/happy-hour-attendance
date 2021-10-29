import Person from '../Person/Person.jsx';

function AttendanceList({list}) {
    return (
        <div>
            {list.map((person, i) => {
                return (
                    <Person key={i} person={person}/>
                )
            })}
        </div>
    )
}

export default AttendanceList;