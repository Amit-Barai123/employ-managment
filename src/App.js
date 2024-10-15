import React, { useState } from 'react';

import EmployeeForm from './component/EmployeeForm';
import EmployeeTable from './component/EmployeeTable';
import EmployeeSearch from './component/EmployeeSearch';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const addEmployee = (employee) => {
    const updatedEmployees = editingEmployee
      ? employees.map(emp => (emp.employeeId === employee.employeeId ? employee : emp))
      : [...employees, employee];

    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
    setEditingEmployee(null);
    
   
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(employee => employee.employeeId !== id);
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
    
    
  };

  const editEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const filterEmployeesByDate = (fromDate, toDate) => {
    const filtered = employees.filter(
      emp => new Date(emp.joiningDate) >= new Date(fromDate) && new Date(emp.joiningDate) <= new Date(toDate)
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Employee Registration System</h1>
      <EmployeeForm onAddEmployee={addEmployee} editingEmployee={editingEmployee} />
      <EmployeeSearch onFilter={filterEmployeesByDate} />
      <EmployeeTable employees={filteredEmployees.length > 0 ? filteredEmployees : employees} onEdit={editEmployee} onDelete={deleteEmployee} />
    </div>
  );
};

export default App;
