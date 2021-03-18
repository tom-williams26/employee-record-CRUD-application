import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  const [employeeRecords, setEmployeeRecords] = useState([]);

  const addEmployee = () => {
    axios
      .post('http://localhost:5000/database/create', {
        name: name,
        age: age,
        address: address,
        position: position,
        wage: wage,
      })
      .then(() => {
        console.log('Attempting to store new employee');
      });

    const getEmployees = ()=> {
      axios.post('http://localhost:5000/database/employees').then((response) => {
        console.log(response);
      })
  };
  return (
    <div className="App">
      <div>
        <h1>Employee Record System</h1>
      </div>
      <div className="employee-entry">
        <div className="record">
          <label>Employee name:</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="record">
          <label>Employee age:</label>
          <input
            type="number"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <div className="record">
          <label>Employee address:</label>
          <input
            type="text"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
        <div className="record">
          <label>Employee position:</label>
          <input
            type="text"
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          />
        </div>
        <div className="record">
          <label>Employee wage (per annum) £:</label>
          <input
            type="number"
            onChange={(event) => {
              setWage(event.target.value);
            }}
          />
        </div>
        <button onClick={addEmployee}>Add Employee</button>
        <button onClick={getEmployees}>Update Employee</button>
        <button>Delete Employee</button>
      </div>
      <div className="border-line"></div>
      <div className="display-employee">
        <button>Display Employees</button>
      </div>
    </div>
  );
}

export default App;
