import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AttendanceForm from './AttendanceForm/AttendanceForm';
import AttendanceList from './AttendanceList/AttendanceList';
import Header from './Header/Header';

import {
  Box,
} from "@mui/material";

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

  return (
    <Box className="App">
      <Header />
      <AttendanceForm fetchList={fetchList} list={list} />
      <AttendanceList fetchList={fetchList} list={list} />
      <footer>
        <p>Code Contributions welcome :)</p>
        <p>https://github.com/blingusblongus/happy-hour-attendance</p>
      </footer>
    </Box>
  );
}

export default App;
