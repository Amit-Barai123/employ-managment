import React from "react";

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered employee-table">
        <thead className="table-dark">
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Joining Date</th>
            <th>Salary</th>
            <th>Contact Number</th>
            <th>Profile Picture</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>
                {new Date(employee.joiningDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td>{employee.salary}</td>
              <td>{employee.contactNumber}</td>
              <td>
                {employee.profilePicture && (
                  <img
                    src={URL.createObjectURL(employee.profilePicture)}
                    alt="profile"
                    className="img-thumbnail"
                    style={{ width: "100px", height: "80px" }}
                  />
                )}
              </td>
              <td>
                <button
                  className="btn btn-warning mb-2 w-100 me-2"
                  onClick={() => onEdit(employee)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger w-100 "
                  onClick={() => onDelete(employee.employeeId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
