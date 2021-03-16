import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

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
        <button>Add Employee</button>
        <button>Update Employee</button>
        <button>Delete Employee</button>
      </div>
    </div>
  );
}

export default App;
