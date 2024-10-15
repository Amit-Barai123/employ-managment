import React, { useState } from 'react';

const EmployeeSearch = ({ onFilter }) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(fromDate, toDate);
  };

  return (
    <form onSubmit={handleSubmit} className="employee-search">
      <h3 className='text-center mt-5' >Search Employee</h3>
      <div className="mb-3">
        <label className="form-label">From Date:</label>
        <input type="date" className="form-control" value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">To Date:</label>
        <input type="date" className="form-control" value={toDate} onChange={(e) => setToDate(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
};

export default EmployeeSearch;
