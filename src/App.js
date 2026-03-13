import React from "react";
import Table from "./components/Table";

function App() {

  const employeeColumns = ["ID", "Name", "Department"];
  const employeeData = [
    [1, "Rahul", "HR"],
    [2, "Amit", "IT"],
    [3, "Sneha", "Finance"]
  ];

  const studentColumns = ["USN", "Name", "Branch"];
  const studentData = [
    ["1RV21CS001", "Ajwal", "CSE"],
    ["1RV21CS002", "Ananya", "ISE"],
    ["1RV21CS003", "Rohit", "ECE"]
  ];

  return (
    <div>

      <Table
        title="Employee Table"
        columns={employeeColumns}
        data={employeeData}
      />

      <Table
        title="Student Table"
        columns={studentColumns}
        data={studentData}
      />

    </div>
  );
}

export default App;