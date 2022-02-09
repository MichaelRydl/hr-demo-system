import React, { useEffect, useState } from "react";
import axios from "axios";
import RowItem from "../RowItem/RowItem";
import { IEmployee } from "../../models/employee";
import AddEmployeeSection from "../AddEmployeeSection/AddEmployeeSection";

const EmployeeListSection = () => {
  const [employeesData, setEmployeesData] = useState<IEmployee[]>([]);

  useEffect(() => {
    axios
      .get("http://34.140.193.23/api/employees")
      .then((res) => setEmployeesData(res.data))
      .catch((error) => {
        console.error("Failed to load data.", error);
      });
  }, []);

  const handleDeleteEmployee = (id: number) => {
    axios.delete(`http://34.140.193.23/api/employees/${id}`).then(() => {
      const employees = employeesData.filter((employee) => employee.id !== id);
      setEmployeesData(employees);
    });
  };

  return (
    <div className="h-full border row-span-3 col-span-2 rounded-lg overflow-auto">
      <div className="h-3/4 overflow-auto">
        <div className="sticky top-0 bg-blue-400 text-white text-lg font-bold text-center border-b p-2">
          Employees List
        </div>
        {employeesData.map((employee, i) => (
          <RowItem
            key={`${employee.name}-${i}`}
            {...{ employee }}
            onDeleteButtonClick={handleDeleteEmployee}
          />
        ))}
      </div>
      <div className="h-1/4 bg-slate-100 border-t">
        <AddEmployeeSection {...{ employeesData, setEmployeesData }} />
      </div>
    </div>
  );
};

export default EmployeeListSection;
