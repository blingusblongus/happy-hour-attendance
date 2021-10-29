import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AttendanceForm from './AttendanceForm/AttendanceForm';
import AttendanceList from './AttendanceList/AttendanceList';
import Header from './Header/Header';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    console.log('fetch run');

    axios.get('/attendance')
      .then(response => {
        setList(response.data);
      }).catch(err => {
        console.log(err);
      })
  }



  console.log(list);

  return (
    <div className="App">
      <Header />
      <AttendanceForm fetchList={fetchList} list={list}/>
      <AttendanceList list={list}/>
    </div>
  );
}

export default App;
