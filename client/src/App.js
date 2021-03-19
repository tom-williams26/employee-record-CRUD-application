import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

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
        setEmployeeRecords([
          ...employeeRecords,
          {
            name: name,
            age: age,
            address: address,
            position: position,
            wage: wage,
          },
        ]);
      });
  };

  const updateEmployee = (id) => {
    axios
      .put('http://localhost:5000/database/update', {
        id: id,
        wage: newWage,
      })
      .then((response) => {
        setEmployeeRecords(
          employeeRecords.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name: val.name,
                  country: val.country,
                  age: val.age,
                  position: val.position,
                  wage: newWage,
                }
              : val;
          })
        );
        alert('Employee details updated...');
      });
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:5000/database/delete/${id}`)
      .then((response) => {
        setEmployeeRecords(
          employeeRecords.filter((val) => {
            return val.id !== id;
          })
        );
        alert('Employee details updated...');
      });
  };

  const getEmployees = () => {
    axios.get('http://localhost:5000/database/employees').then((response) => {
      setEmployeeRecords(response.data);
    });
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
      </div>
      <div className="border-line"></div>
      <div className="display-employee">
        <button onClick={getEmployees}>Display Employees</button>
        {employeeRecords.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h4>Employee Name: {val.name}</h4>
                <h4>Age: {val.age}</h4>
                <h4>Address: {val.address}</h4>
                <h4>Position: {val.position}</h4>
                <h4>Employee wage (per annum) £: {val.wage}</h4>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Update wage..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployee(val.id);
                  }}
                >
                  Update Employee
                </button>
                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete Employee
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
