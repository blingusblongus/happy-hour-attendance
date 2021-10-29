import Person from '../Person/Person.jsx';
import './AttendanceList.css';

function AttendanceList({list, fetchList}) {
    const attending = list.filter(el => el.going === 'true')
    const maybe = list.filter(el => el.going === 'maybe')
    const notGoing = list.filter(el => el.going === 'false')
    console.log(attending);
    return (
        <>
        <h3>Going: {attending.length}</h3>
        <div className="flex-container">
            {attending.map((person, i) => {
                return (
                    <Person key={i} person={person} fetchList={fetchList}/>
                )
            })}
        </div>
        <h4>Maybe Going: {maybe.length}</h4>
        <div className="flex-container">
            {maybe.map((person, i) => {
                return (
                    <Person key={i} person={person} fetchList={fetchList}/>
                )
            })}
        </div>
        <h4>Not Going: {notGoing.length}</h4>
        </>
    )
}

export default AttendanceList;