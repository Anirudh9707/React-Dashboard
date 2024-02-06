// Grid.js
import React, { useState } from 'react';

function Grid({ employeeData }) {
  const [newEmployee, setNewEmployee] = useState({
    employee_name: '',
    employee_age: 0,
    employee_salary: 0,
  });

  const handleAddRow = () => {
    // Assuming your employeeData is an array
    // Add the new employee to the array locally
    // You might want to perform validation before adding
    employeeData.push(newEmployee);
    setNewEmployee({
      employee_name: '',
      employee_age: 0,
      employee_salary: 0,
    });
  };

  return (
    <div>
      {/* Display your existing grid */}
      {/* ... */}

      {/* Add Row Form */}
      <div>
        <h3>Add New Employee</h3>
        <input
          type="text"
          placeholder="Name"
          value={newEmployee.employee_name}
          onChange={(e) => setNewEmployee({ ...newEmployee, employee_name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newEmployee.employee_age}
          onChange={(e) => setNewEmployee({ ...newEmployee, employee_age: parseInt(e.target.value, 10) })}
        />
        <input
          type="number"
          placeholder="Salary"
          value={newEmployee.employee_salary}
          onChange={(e) => setNewEmployee({ ...newEmployee, employee_salary: parseInt(e.target.value, 10) })}
        />
        <button onClick={handleAddRow}>Add</button>
      </div>
    </div>
  );
}

export default Grid;
