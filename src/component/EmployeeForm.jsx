import React, { useState, useEffect,useRef } from 'react';

const EmployeeForm = ({ onAddEmployee, editingEmployee }) => {
  const [employee, setEmployee] = useState({
    employeeId: '',
    name: '',
    address: '',
    contactNumber: '',
    joiningDate: '',
    gender: '',
    salary: '',
    department: '',
    profilePicture: null
  });

  const fileInputRef = useRef(null);



  useEffect(() => {
    if (editingEmployee) {
      setEmployee(editingEmployee);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setEmployee(prevState => ({
      ...prevState,
      profilePicture: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(employee);
    handleReset();
  };

  const handleReset = () => {
    setEmployee({
      employeeId: '',
      name: '',
      address: '',
      contactNumber: '',
      joiningDate: '',
      gender: '',
      salary: '',
      department: '',
      profilePicture: null
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // This resets the file input
    }
  
  };

  

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <div className="mb-3">
        <label className="form-label">Employee ID:</label>
        <input type="text" name="employeeId" className="form-control" value={employee.employeeId} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input type="text" name="name" className="form-control" value={employee.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Address:</label>
        <textarea name="address" className="form-control" value={employee.address} onChange={handleChange} required></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Contact Number:</label>
        <input type="text" name="contactNumber" className="form-control" value={employee.contactNumber} onChange={handleChange} pattern="\d{10}" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Joining Date:</label>
        <input type="date" name="joiningDate" className="form-control" value={employee.joiningDate} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Gender:</label>
        <div className="form-check">
  <input 
    type="radio" 
    name="gender" 
    value="Male" 
    className="form-check-input" 
    onChange={handleChange} 
    checked={employee.gender === 'Male'} 
  />
  <label className="form-check-label">Male</label>
</div>
<div className="form-check">
  <input 
    type="radio" 
    name="gender" 
    value="Female" 
    className="form-check-input" 
    onChange={handleChange} 
    checked={employee.gender === 'Female'} 
  />
  <label className="form-check-label">Female</label>
</div>
<div className="form-check">
  <input 
    type="radio" 
    name="gender" 
    value="Other" 
    className="form-check-input" 
    onChange={handleChange} 
    checked={employee.gender === 'Other'} 
  />
  <label className="form-check-label">Other</label>
</div>

      </div>
      <div className="mb-3">
        <label className="form-label">Salary:</label>
        <input type="number" name="salary" className="form-control" value={employee.salary} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Department:</label>
        <select name="department" className="form-select" value={employee.department} onChange={handleChange} required>
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Profile Picture:</label>
        <input type="file" name="profilePicture" className="form-control" ref={fileInputRef} // Attach the ref to the file input
 onChange={handleFileChange} />
      </div>
      <button type="submit" className="btn btn-primary me-2">Submit</button>
      <button type="button" className="btn btn-secondary" onClick={handleReset}>Clear</button>
    </form>
  );
};

export default EmployeeForm;
