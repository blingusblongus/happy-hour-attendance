import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import AttendanceForm from './AttendanceForm/AttendanceForm';

function App() {
  let list = [];

  const fetchList = () => {
    console.log('fetch run');
    
    axios.get('/attendance')
      .then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AttendanceForm />
    </div>
  );
}

export default App;
