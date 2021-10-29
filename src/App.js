import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AttendanceForm from './AttendanceForm/AttendanceForm';
import AttendanceList from './AttendanceList/AttendanceList';

function App() {
  const [list, setList] = useState([]);

  const fetchList = () => {
    console.log('fetch run');

    axios.get('/attendance')
      .then(response => {
        console.log(response);
        setList(response.data);
        console.log(list);
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchList();
  }, []);

  console.log(list);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AttendanceForm />
      <AttendanceList list={list}/>
    </div>
  );
}

export default App;
