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
    <div className="h-full border row-span-3 col-span-2 flex flex-col justify-between rounded-lg overflow-auto">
      <div className="overflow-auto">
        <div className="sticky top-0 bg-blue-500 text-white text-lg font-bold text-center border-b p-2">
          <h1>Employees List</h1>
          <p className="text-xs">(name, age, position)</p>
        </div>
        <div className="border-b">
          {employeesData.map((employee, i) => (
            <RowItem
              key={`${employee.name}-${i}`}
              {...{ employee }}
              onDeleteButtonClick={handleDeleteEmployee}
            />
          ))}
        </div>
      </div>
      <div className="bg-slate-100 border-t">
        <AddEmployeeSection {...{ employeesData, setEmployeesData }} />
      </div>
    </div>
  );
};

export default EmployeeListSection;
