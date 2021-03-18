import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Employee Record System</h1>
      </div>
      <div className="employee-entry">
        <div className="record">
          <label>Employee name:</label>
          <input type="text" />
        </div>
        <div className="record">
          <label>Employee age:</label>
          <input type="number" />
        </div>
        <div className="record">
          <label>Employee address:</label>
          <input type="text" />
        </div>
        <div className="record">
          <label>Employee position:</label>
          <input type="text" />
        </div>
        <div className="record">
          <label>Employee wage (per annum) £:</label>
          <input type="number" />
        </div>
        <button>Add Employee</button>
        <button>Update Employee</button>
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
